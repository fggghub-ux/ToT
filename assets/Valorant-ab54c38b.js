import { r as y, j as e, R as Kn } from "./vendor-react-3a46a5d3.js";
import {
    dw as Be,
    u as $s,
    a as As,
    c as Fe,
    dx as Ss,
    dy as Cs,
    dz as ws,
    bo as Bs,
    aq as Ms,
    ar as zs,
    ay as Ls,
    aR as Ps,
    bi as Is,
    dA as me,
    dB as he,
    c2 as Me,
    bj as Rs,
    f as we,
    dC as je,
} from "./app-2c902988.js";
import { A as Gn, m as re } from "./vendor-motion-62fc1664.js";
import {
    N as Je,
    c as cn,
    ab as J,
    a3 as Vs,
    Z as tn,
    P as Jn,
    ce as on,
    T as Hn,
    de as In,
    I as ln,
    df as Ts,
    dg as Ds,
    ad as Es,
    a8 as Fs,
    aC as Os,
    b as _s,
} from "./vendor-icons-e63d3118.js";
import "./vendor-7bc51c32.js";
import "./vendor-leaflet-f4c2a8c5.js";
const un = [
        {
            id: "haven",
            name: "Haven",
            zh: "隐世修所",
            sites: 3,
            sitesLabel: "A/B/C",
            trait: "全图唯一三点图，结构紧凑，防守方被拉扯得最狠",
            callouts: [
                "A大",
                "A小",
                "A二楼",
                "A包点",
                "A后点",
                "A箱子",
                "A暗室",
                "B大",
                "B小",
                "B二楼",
                "B包点",
                "市场",
                "B门",
                "C大",
                "C小",
                "C长",
                "C包点",
                "中路",
                "中门",
                "暗道",
            ],
        },
        {
            id: "split",
            name: "Split",
            zh: "霓虹町",
            sites: 2,
            sitesLabel: "A/B",
            trait: "垂直落差大，靠滑索升降；中路不拿下很难进攻",
            callouts: [
                "A大",
                "A小",
                "A澡堂",
                "A包点",
                "A二楼",
                "A坡道",
                "U型通道",
                "B大厅",
                "B外",
                "B包点",
                "B二楼",
                "中路",
                "天桥",
            ],
        },
        {
            id: "ascent",
            name: "Ascent",
            zh: "亚海悬城",
            sites: 2,
            sitesLabel: "A/B",
            trait: "中路开阔且决定一切，两个包点都有可开关的金属门",
            callouts: [
                "A大",
                "A小",
                "A连",
                "A包点",
                "A二楼",
                "吧台",
                "警家",
                "B大",
                "B小",
                "B包点",
                "B连",
                "B二楼",
                "市场",
                "车库",
                "后巷",
                "中门",
                "拱桥",
                "木板",
                "中厅",
            ],
        },
        {
            id: "bind",
            name: "Bind",
            zh: "源工重镇",
            sites: 2,
            sitesLabel: "A/B",
            trait: "没有中路，两个单向传送门连接两侧，信息差极大",
            callouts: [
                "A厅",
                "A小",
                "A包点",
                "A二楼",
                "A浴室",
                "A连接",
                "A灯区",
                "B大",
                "B连接",
                "B窗口",
                "B包点",
                "B喷泉",
                "B庭院",
                "B管道",
                "传送门",
            ],
        },
        {
            id: "icebox",
            name: "Icebox",
            zh: "森寒冬港",
            sites: 2,
            sitesLabel: "A/B",
            trait: "水平滑索加多层垂直结构，架点角度极多，包藏得住",
            callouts: [
                "A二楼",
                "A厅",
                "A巢房",
                "A管",
                "A包点",
                "A绿箱",
                "警家",
                "A连",
                "管道",
                "CT桥",
                "狗洞",
                "中路",
                "B车库",
                "B黄箱",
                "B白箱",
            ],
        },
        {
            id: "breeze",
            name: "Breeze",
            zh: "微风岛屿",
            sites: 2,
            sitesLabel: "A/B",
            trait: "超大开阔地图，长距离对枪，狙击手价值极高",
            callouts: [
                "A大厅",
                "A桥",
                "A金属门",
                "A金字塔",
                "A洞穴",
                "A商店",
                "B隧道",
                "B弯道",
                "B窗口",
                "B后点",
                "中路巢穴",
                "中路门",
                "大炮",
            ],
        },
        {
            id: "fracture",
            name: "Fracture",
            zh: "裂变峡谷",
            sites: 2,
            sitesLabel: "A/B",
            trait: "H 形结构，进攻方从两侧同时出生，防守方永远被前后夹",
            callouts: [
                "A大厅",
                "A门",
                "A大道",
                "A绳索",
                "A连接",
                "A空投",
                "A高地",
                "B大",
                "B隧道",
                "B食堂",
                "B塔楼",
                "B拱廊",
                "进攻桥",
            ],
        },
        {
            id: "pearl",
            name: "Pearl",
            zh: "深海明珠",
            sites: 2,
            sitesLabel: "A/B",
            trait: "水下城市，纯平面无特殊机制，中路三条路决定进攻方向",
            callouts: [
                "A大",
                "A连接",
                "A艺术馆",
                "A花店",
                "A密室",
                "A餐厅",
                "B大",
                "B大厅",
                "B屏幕",
                "B连接",
                "B塔楼",
                "B隧道",
                "B夜店",
                "中路广场",
                "中路门",
            ],
        },
        {
            id: "lotus",
            name: "Lotus",
            zh: "莲华古城",
            sites: 3,
            sitesLabel: "A/B/C",
            trait: "三点图，带可旋转的石门和可破坏的门，绕后路线极多",
            callouts: [
                "A大",
                "A树",
                "A空投",
                "A柱子",
                "A楼梯",
                "A门",
                "B大",
                "B柱子",
                "B塔楼",
                "C大",
                "C土堆",
                "C连接",
                "C大厅",
                "旋转门",
            ],
        },
        {
            id: "sunset",
            name: "Sunset",
            zh: "日落之城",
            sites: 2,
            sitesLabel: "A/B",
            trait: "洛杉矶街头风格，中路开阔，结构紧凑短兵相接多",
            callouts: [
                "A大",
                "A大厅",
                "A弯道",
                "A连接",
                "A小巷",
                "B大",
                "B市场",
                "B奶茶店",
                "B楼梯",
                "B后点",
                "中路庭院",
                "中路瓷砖",
            ],
        },
        {
            id: "abyss",
            name: "Abyss",
            zh: "幽邃地窟",
            sites: 2,
            sitesLabel: "A/B",
            trait: "没有边界围栏，会直接掉下去摔死；位移和击退价值被放大",
            callouts: [
                "A大",
                "A桥",
                "A连接",
                "A保安室",
                "A塔楼",
                "A后点",
                "B大",
                "B连接",
                "B地下",
                "B塔楼",
                "B巢穴",
                "中路图书馆",
                "中路天桥",
                "上升器",
            ],
        },
        {
            id: "corrode",
            name: "Corrode",
            zh: "盐海矿镇",
            sites: 2,
            sitesLabel: "A/B",
            trait: "法国古堡矿场，有可破坏的墙",
            callouts: [
                "A吊车",
                "A拐角",
                "A小道",
                "A大厅",
                "A大道",
                "A庭院",
                "B拱门",
                "B拐角",
                "B小道",
                "B大厅",
                "B大道",
                "B高台",
                "中路台阶",
                "中路窗口",
            ],
        },
        {
            id: "summit",
            name: "Summit",
            zh: "天枢云阙",
            sites: 2,
            sitesLabel: "A/B",
            trait: "中国风，可破坏的墙，A / 中 / B 各有一处下落门机关",
            callouts: ["A点", "B点", "中路", "中央石阵", "左拱门", "右回廊", "拱门二楼", "下落门"],
        },
    ],
    Ks = [
        "【报点怎么说 —— 这决定了队伍麦像不像真的在打游戏】",
        "· 格式就三段：**位置 + 人数 + 动作**。「A大两个」「B连一个在架」「中路空的」「包在B，两个守着」。",
        "· **要短。**麦里没人说完整的句子。三到六个字是常态，超过十个字就已经不像玩家在说话了。",
        "· 位置**只用报点名，不要描述角度**：",
        "    ✗「B包点后面那个天窗平台上有两个」—— 这是攻略在描述位置，不是报点",
        "    ✓「B天窗两个」",
        "· 不确定就说不确定：「可能两个」「有脚步，不知道几个」。看到几个报几个，别脑补。",
        "· **细节留到打完再说。**交火当下只给最少的信息；打完了才会补「刚那个是奇乐，炮台在B」。",
        "· 情绪是真的：被秒了会骂一句，拿到首杀会叫，残局时全队会安静下来只报关键信息。",
        "· 技能就叫技能的名字（烟、闪、无人机、大招），不用每次都念全称。",
        "",
        "**这几条只管报点和战术交流。**房间麦是私下聊天，不受这套约束 —— 那儿说的是人话，不是报点。",
    ].join(`
`),
    Oe = {
        duelist: "决斗者 · 负责开图和拿首杀，进攻时第一个进点",
        initiator: "先锋 · 负责情报和破点，用技能把点里的人打出来",
        sentinel: "哨卫 · 负责守点和封锁侧翼，打信息战和拖时间",
        controller: "控场 · 负责拉烟切割战场，决定队伍能不能进点",
    },
    Z = [
        {
            id: "phoenix",
            en: "Phoenix",
            zh: "不死鸟",
            role: "duelist",
            kit: "火墙闪光，自带回血和复活",
            skills: ["火冒三丈", "闪光曲球", "火热手感", "再火一回"],
        },
        {
            id: "jett",
            en: "Jett",
            zh: "捷风",
            role: "duelist",
            kit: "高机动位移 + 烟，起狙第一人",
            skills: ["瞬云", "凌空", "逐风", "飓刃"],
        },
        {
            id: "raze",
            en: "Raze",
            zh: "雷兹",
            role: "duelist",
            kit: "爆炸物清点，狭窄地形极强",
            skills: ["花车巡游", "惊喜翻腾", "彩雷飞溅", "晚安焰火"],
        },
        {
            id: "reyna",
            en: "Reyna",
            zh: "芮娜",
            role: "duelist",
            kit: "击杀后回血或隐身，滚雪球型",
            skills: ["睥睨", "噬尽", "逐散", "女皇旨令"],
        },
        {
            id: "yoru",
            en: "Yoru",
            zh: "夜露",
            role: "duelist",
            kit: "假脚步和传送，打信息欺骗",
            skills: ["出其不意", "攻其不备", "不请自来", "神鬼不觉"],
        },
        {
            id: "neon",
            en: "Neon",
            zh: "霓虹",
            role: "duelist",
            kit: "高速冲刺，抢点速度最快",
            skills: ["高速通道", "闪电弹球", "充能疾驰", "超限暴走"],
        },
        {
            id: "iso",
            en: "Iso",
            zh: "壹决",
            role: "duelist",
            kit: "护盾和单挑领域，专打一对一",
            skills: ["绝对屏障", "稳态剥离", "战斗心流", "决斗通牒"],
        },
        {
            id: "waylay",
            en: "Waylay",
            zh: "幻棱",
            role: "duelist",
            kit: "光速位移，进出点极快",
            skills: ["光棱闪爆", "光速飞跃", "溯流回光", "时光修罗场"],
        },
        {
            id: "sova",
            en: "Sova",
            zh: "猎枭",
            role: "initiator",
            kit: "侦查箭和无人机，全图情报",
            skills: ["枭型无人机", "雷击箭", "寻敌箭", "狂猎之怒"],
        },
        {
            id: "breach",
            en: "Breach",
            zh: "铁臂",
            role: "initiator",
            kit: "穿墙震荡和闪光，强开强破点",
            skills: ["剧震余波", "闪点爆破", "山崩地陷", "惊雷卷地"],
        },
        {
            id: "skye",
            en: "Skye",
            zh: "斯凯",
            role: "initiator",
            kit: "可控闪光和探路兽，带治疗",
            skills: ["愈生之息", "辟林之虎", "引路之隼", "追猎者"],
        },
        {
            id: "kayo",
            en: "KAY/O",
            zh: "KAY/O",
            role: "initiator",
            kit: "压制技能让对面无法放技能",
            skills: ["碎片溢出", "闪存过载", "零点嗅探", "无效命令"],
        },
        {
            id: "fade",
            en: "Fade",
            zh: "黑梦",
            role: "initiator",
            kit: "恐惧系情报，标记并致盲腍坑",
            skills: ["黯兽", "幽爪", "诡眼", "夜临"],
        },
        {
            id: "gekko",
            en: "Gekko",
            zh: "盖可",
            role: "initiator",
            kit: "小怪物可回收，技能复用率高",
            skills: ["嗨爆全场", "顽皮搭档", "炫彩小子", "鲨鲨"],
        },
        {
            id: "tejo",
            en: "Tejo",
            zh: "钛狐",
            role: "initiator",
            kit: "远程投放和精准打击，隔着墙清点",
            skills: ["潜袭爬虫", "特快专递", "精准投放", "末日审判"],
        },
        {
            id: "brimstone",
            en: "Brimstone",
            zh: "炼狱",
            role: "controller",
            kit: "地图落烟最快，带火力支援",
            skills: ["振奋信标", "燃烧榴弹", "空投烟幕", "天基光束"],
        },
        {
            id: "viper",
            en: "Viper",
            zh: "蝰蛇",
            role: "controller",
            kit: "毒墙分割战场，后架和拖时间",
            skills: ["蛇吻", "瘴云", "毒幕", "蝰腹"],
        },
        {
            id: "omen",
            en: "Omen",
            zh: "幽影",
            role: "controller",
            kit: "可传送和致盲，烟位灵活",
            skills: ["践影", "暗魇", "黑瘴", "离魂"],
        },
        {
            id: "astra",
            en: "Astra",
            zh: "星隧",
            role: "controller",
            kit: "全图预布星，控场上限最高",
            skills: ["重力之阱", "新星脉冲", "星云", "星界形态"],
        },
        {
            id: "harbor",
            en: "Harbor",
            zh: "海神",
            role: "controller",
            kit: "水墙可穿可挡，破点强势",
            skills: ["乱涌", "狂潮", "海盾", "怒涛"],
        },
        {
            id: "clove",
            en: "Clove",
            zh: "暮蝶",
            role: "controller",
            kit: "死后仍能放技能并自我复活",
            skills: ["虹吸", "整蛊", "霞染", "化蝶"],
        },
        {
            id: "mihe",
            en: "Mihe",
            zh: "迷核",
            role: "controller",
            kit: "声波控场，帷幕挡视野",
            skills: ["电音脉冲", "共振谐律", "声波帷幕", "音脉强袭"],
        },
        {
            id: "sage",
            en: "Sage",
            zh: "贤者",
            role: "sentinel",
            kit: "冰墙封路、治疗、复活队友",
            skills: ["玉城", "薄冰", "逢春", "再起"],
        },
        {
            id: "cypher",
            en: "Cypher",
            zh: "零",
            role: "sentinel",
            kit: "监视器和绊线，封锁侧翼情报",
            skills: ["震慑绊线", "赛博囚笼", "战术监控", "神经取析"],
        },
        {
            id: "killjoy",
            en: "Killjoy",
            zh: "奇乐",
            role: "sentinel",
            kit: "炮台机器人守点，后架最稳",
            skills: ["纳米蜂群", "自动哨兵", "哨戒炮台", "全面封锁"],
        },
        {
            id: "chamber",
            en: "Chamber",
            zh: "尚博勒",
            role: "sentinel",
            kit: "自带狙和传送锚点，架点后撤",
            skills: ["贵宾限行", "金牌猎头", "闪转自如", "孤高火力"],
        },
        {
            id: "vyse",
            en: "Vyse",
            zh: "维斯",
            role: "sentinel",
            kit: "金属陷阱，能夺枪和封路",
            skills: ["剃刀藤蔓", "裁断", "弧光玫瑰", "铁棘禁园"],
        },
        {
            id: "deadlock",
            en: "Deadlock",
            zh: "钢索",
            role: "sentinel",
            kit: "屏障网封路、声波陷阱抢情报，大招直接拖走一个人",
            skills: ["阻域屏障", "声感陷阱", "重力捕网", "断魂索道"],
        },
        {
            id: "veto",
            en: "Veto",
            zh: "禁灭",
            role: "sentinel",
            kit: "可传送的漩涡加黏液陷阱，大招清掉对面所有装置",
            skills: ["涡流折跃", "裂变残片", "噬源体", "完全进化"],
        },
    ],
    dn = ["黑铁", "青铜", "白银", "黄金", "铂金", "钻石", "超凡", "神话"],
    Un = "源能战魂",
    ce = [...dn.flatMap((n) => ["1", "2", "3"].map((s) => `${n} ${s}`)), Un],
    Gs = [
        "5v5。**先赢下 13 个回合的一方直接获胜**，不需要领先几局 —— 13:11、13:0 都是当场结束。",
        "每半场 12 回合，打满 12 回合攻防交换。第一回合是手枪局。",
        "所以一局最多打 24 个常规回合。只有打成 12:12 才进加时，加时才需要净胜 2 局（13:12 不算赢）。",
        "进攻方目标是装下 Spike（包）并守到爆炸，防守方目标是拆包或团灭。",
        "回合时间 100 秒。装包需要 4 秒，装好后 45 秒爆炸。拆包需要 7 秒，可以在 3.5 秒处停下做「半拆」。",
        "经济：击杀 +200；赢下回合 +3000；输掉回合按连败递增 +1900 / +2400 / +2900；装包成功全队 +300。",
        "常见经济决策：手枪局 → 二回合 eco 或 bonus → full buy。连续两把 eco 会彻底崩盘。",
        "一个健康的阵容通常是：1 控场 + 1 守卫 + 1 先锋 + 1 决斗者 + 1 自由人。缺控场几乎打不了进攻。",
    ];
function Yn(n, s = Math.random) {
    const t = Array.isArray(n) ? n : [];
    return t.length ? t[Math.floor(s() * t.length)] : null;
}
function Rn(n = Math.random) {
    return Yn(un, n);
}
function oe(n) {
    return un.find((s) => s.id === n) || null;
}
function _(n) {
    return Z.find((s) => s.id === n) || null;
}
function Wn(n) {
    return Z.filter((s) => s.role === n);
}
function fe(n) {
    var t;
    const s = _(n);
    return s
        ? (t = s.skills) != null && t.length
            ? `${s.zh}（${s.skills.join("/")}）`
            : s.zh
        : String(n || "?");
}
function Js(n) {
    let s = String(n || "").trim();
    s = s
        .replace(/^```(?:json)?\s*/i, "")
        .replace(/```\s*$/, "")
        .trim();
    const t = s.indexOf("{"),
        a = s.lastIndexOf("}");
    if (t < 0 || a <= t) return null;
    let i = s.slice(t, a + 1);
    for (const l of [i, i.replace(/,(\s*[}\]])/g, "$1")])
        try {
            return JSON.parse(l);
        } catch {}
    return null;
}
function ae(n) {
    const s = oe(n),
        t = [
            "=== VALORANT 对局模拟 ===",
            "你在模拟一局《无畏契约 / VALORANT》的排位对局。这是一款 5v5 的战术射击游戏，不是 MOBA，也不是大逃杀。",
            "",
            "【基础机制】",
            ...Gs.map((a) => "· " + a),
            "",
            "【英雄定位】每个英雄属于四个定位之一，定位决定他在一个回合里该做什么：",
            ...Object.values(Oe).map((a) => "· " + a),
            "",
        ];
    return (
        s &&
            t.push(
                `【本局地图：${s.name}（${s.zh}）】`,
                `· ${s.sites} 个包点（${s.sitesLabel}）。${s.trait}`,
                `· 这张图的报点：${s.callouts.join(" / ")}`,
                "· 描述战况时**必须用这张图真实存在的报点**，不要编造这张图没有的地形。",
                "",
                Ks,
                "",
            ),
        t.push(
            "【写对局的要求】",
            "· 一个回合就是一个回合：几十秒内的一次交火，不是一整场战役。不要把一个回合写成史诗。",
            "· 战况要具体到人、到位置、到枪线：谁在哪、先手打到谁、谁的技能交了、包在哪。",
            "· 经济和比分要连贯：上一局输了这局大概率买不起，连败会 eco，这些要体现出来。",
            "· 队友和对手是**人**，会上头、会甩锅、会突然发挥、会挂机。不要把他们写成一模一样的 NPC。",
            "· 不要每局都赢，也不要每局都是残局 1v3。大部分回合是平淡的，关键局才该炸。",
        ),
        t.join(`
`)
    );
}
const Qn = [
        { id: "party", label: "房间麦", hint: "只有一起组队的我们几个听得见" },
        { id: "team", label: "队伍麦", hint: "我方 5 个人听得见，路人队友也在" },
        { id: "all", label: "全体", hint: "双方 10 个人都看得到" },
    ],
    $e = [
        { id: "cn", label: "国服", lang: "中文", ids: "中文、拼音或英文 ID" },
        { id: "kr", label: "韩服", lang: "韩语", ids: "韩文 ID 或韩式罗马音" },
        { id: "jp", label: "日服", lang: "日语", ids: "日文 ID（假名 / 汉字）或罗马音" },
        { id: "na", label: "北美服", lang: "英语", ids: "英文 ID" },
        { id: "eu", label: "欧服", lang: "英语（队里常混多国语言）", ids: "英文或各国语言 ID" },
        { id: "ap", label: "亚服", lang: "英语（东南亚各国混队）", ids: "英文 ID 为主" },
        { id: "hk", label: "港服", lang: "粤语和英语混着说", ids: "英文 ID 或粤拼，偶有繁体中文" },
        { id: "tw", label: "台服", lang: "中文（台湾用语，繁体）", ids: "繁体中文或英文 ID" },
    ],
    Hs = $e.map((n) => n.id),
    Q = "cn",
    Vn = {
        韩国: "kr",
        日本: "jp",
        美国: "na",
        英国: "eu",
        法国: "eu",
        德国: "eu",
        西班牙: "eu",
        意大利: "eu",
        俄罗斯: "eu",
        泰国: "ap",
        越南: "ap",
        香港: "hk",
        台湾: "tw",
    };
function rn(n) {
    return $e.find((s) => s.id === n) || $e[0];
}
function Tn(n = "") {
    const s = String(n || "").trim();
    if (!s) return Q;
    const t = Object.keys(Vn).find((a) => s.includes(a));
    return t ? Vn[t] : Q;
}
function Us({
    serverId: n = Q,
    nationality: s = "",
    outputLanguage: t = "",
    charName: a = "TA",
    meName: i = "我",
} = {}) {
    const l = rn(n),
        r = String(t || "").trim();
    if (!(l.id !== Q) && !r) return "";
    const h = r || String(s || "").trim();
    return [
        `【当前大区：${l.label}】`,
        `· 这个号在 **${l.label}**。路人队友和对面都是本区玩家 —— 队伍麦和全体频道的默认语言是 **${l.lang}**。`,
        `· 生成路人和对面的 ID 时按「${l.ids}」来。` +
            (l.ids.includes("中文") ? "" : "**不要给这个区的路人起简体中文 ID。**"),
        "· 段位名、地图名、英雄名在界面上一律保持中文 —— 那是给用户看的显示语言，和麦里说什么语言是两回事。",
        "",
        `· **${a} 自己说哪种语言，从角色资料推**，三选一：`,
        `  - **母语${h ? `（${h}）` : ""}** —— 跟同母语的人说话时的默认。`,
        "  - **英语** —— 队里语言不通、需要一个公共语言时；欧服 / 亚服的路人局基本都是这个。",
        `  - **中文** —— 资料写了他会中文，或者他正在房间麦里单独跟${i}说话、而${i}说中文时。`,
        "  资料写了他中文到什么程度，就按那个程度来（完全不会 / 正在学 / 双语流利），不要凭空拔高。",
        "  如果他的母语就是这个区的语言，跟路人说话自然用母语；如果他是外国人在这个区打，就按他实际会什么来。",
        "",
        `· **同一个回合里不同频道可以是不同语言，这一点很重要。**对路人用本区语言喊点，一转头在房间麦跟${i}说话就换成中文 ——`,
        `  这个切换本身就是他在为${i}破例，是能被看见的偏心。反过来也成立：情绪上头、来不及切的时候，母语会顶出来。`,
        "",
        "【外语一律在原地带中文括号翻译 —— 不管是谁说的】",
        `· **这条跟说话的人是谁无关。**${a}说的、路人队友说的、对面说的、朋友的号说的，`,
        "  只要那句话不是中文，就在**同一个字段、紧跟那句话后面**补一个中文括号：`외국어（中文）`。",
        "  在非国服的局里，麦里本来就大多是外语 —— 所以大部分 voice 条目都该是「外语（中文）」这个样子，",
        "  **不是只有主角那几句才翻译。**",
        "",
        "· 具体到字段：`partyVoice` / `teamVoice` / `allVoice` 里每一条的 `text`、赛后的 `lines`、",
        "  大厅回复的 `reply` —— 这些装的都是说出口的话，外语就得带括号翻译。",
        "· 叙述里**引用**了一句外语（narration / charMoment / premise / outcome / detail 里带引号的那种），",
        "  同样紧跟括号翻译。",
        "",
        "· **但叙述文本本身一律写中文。**narration、charMoment、premise、outcome、label、detail、note、vibe",
        "  是写给用户看的战况描述，不是台词 —— 它们永远是中文，不要整段用外语写，也不需要翻译。",
        "",
        "· 不要把翻译单独拆成一条 voice、放到段末、或者写进别的字段 —— 必须紧跟在那句话后面。",
        "· 中文台词不加括号。玩家 ID、英雄名、报点名、地图名这些专有名词保持原样，不翻译也不注音。",
    ].join(`
`);
}
function be({ partyNames: n = [], charName: s = "", meName: t = "" } = {}) {
    return [
        "【三个频道，听众完全不同，绝对不要混】",
        `· **房间麦（party）**：只有一起排队的这几个人听得见${n.length ? ` —— ${n.join("、")}` : ""}。**路人队友听不见，对面更听不见。**`,
        "  这是开黑的人说私房话的地方：互相调侃、抱怨路人、笑场、走神聊别的、说只想让对方听见的话。",
        s && t
            ? `  ${s}在这里跟${t}说话，和他在队伍麦里说话**不是一回事** —— 这里没有外人，他可以松下来。`
            : "",
        "· **队伍麦（team）**：我方 5 个人都听得见，**包括三个路人**。这里说报点、喊技能、要钱、甩锅、道歉。",
        "  有外人在场，说话方式会收着 —— 亲密的话不会在这儿说。",
        "· **全体（all）**：双方 10 个人都看得到。游戏里这是**打字的全体频道**，所以偏短、像扣字，多是垃圾话、嘲讽、赛后 gg。",
        "  在这里说的话对面会回，也会记仇，后面几个回合他们可能专门针对你。",
        "",
        "· **不是每个回合三个频道都要有人说话。**大多数回合只有队伍麦几句报点。",
        "  房间麦在局势松弛、刚赢下一波、或者有人做了好笑的事时才热闹。",
        "  全体频道更少 —— 只有真的被打爆了、或者打爆了对面、或者对面先挑衅时才有。",
    ].filter(Boolean).join(`
`);
}
be();
function Ys({
    owner: n,
    ownerName: s,
    personaBlock: t = "",
    memoryHits: a = "",
    memoryBlock: i = "",
    hint: l = "",
    existing: r = [],
    seed: o = null,
    langBlock: h = "",
    coreBlock: c = "",
}) {
    const x =
            n === "char"
                ? `「${s}」这个角色本人`
                : n === "friend"
                  ? `我的朋友「${s || "（还没起名）"}」`
                  : `我自己（${s}）`,
        p = [ae(null), "", "【这次的任务】给" + x + "生成一份无畏契约的账号资料。", ""];
    return (
        a &&
            p.push(
                "【我们真的聊到过的、跟游戏有关的话 —— 这一段优先级最高】",
                a,
                "",
                "**上面这些是既成事实，不是参考。**如果里面提到过段位、水平、主玩什么英雄、游戏 ID 怎么取，",
                "就**照那个来**，不要自己另编一个。跟你的直觉冲突时，以上面说过的话为准。",
                "",
            ),
        t && p.push("【人设资料】", t, ""),
        c && p.push(c, ""),
        h && p.push(h, ""),
        i && p.push("【其他相处片段（背景，优先级低于上面那段）】", i, ""),
        o &&
            (o.name || o.rank || o.note) &&
            p.push(
                "【我已经填好的部分 —— 这些不要改，只补空着的】",
                o.name ? `· 游戏 ID：${o.name}` : "",
                o.tag ? `· TAG：${o.tag}` : "",
                o.rank ? `· 段位：${o.rank}` : "",
                o.note ? `· 备注：${o.note}` : "",
                o.playstyle ? `· 打法：${o.playstyle}` : "",
                "",
            ),
        r.length &&
            p.push(
                "【这个人已经有的号 —— 新号要和它们区分开，别重名也别数据雷同】",
                ...r.map((m) => `· ${m.name}#${m.tag} · ${m.rank} · ${m.acs} ACS`),
                "",
            ),
        l && p.push("【我的要求 —— 和上面的记忆同等优先】" + l, ""),
        p.push(
            es,
            "",
            "【怎么定数据】",
            "· 先想清楚**这是个什么号**（主号？小号？很久没打的老号？），再让段位和数据一起符合那个设定。",
            '· 段位、ACS、KD、爆头率要互相对得上 —— 除非上面那条"段位不等于真实水平"里的情况成立。',
            "· ID 的取法要像**这个人**会取的名字：从他的说话方式、性格、常用词里推，不要给一个通用的游戏 ID。",
            "· 常用英雄要符合这个人的性格和打法，不要随便挑三个。",
            n === "char"
                ? "· 这个号要像**他本人**会注册的号。他是主播，段位和数据应该拿得出手，但也不必是全服第一。"
                : "",
            "",
            "【只输出 JSON，不要任何解释】",
            '{"name":"游戏ID","tag":"四位内的TAG","rank":"段位（用中文全称，如 白银 3）","rr":0到100的整数,',
            ' "level":账号等级整数,"winrate":"胜率如 53%","acs":平均战斗分整数,"kd":"KD如 1.14",',
            ' "hs":"爆头率如 24%","mainAgents":["英雄id","英雄id"],"playstyle":"一句话打法特点","note":"一句话这个号的来历"}',
            "",
            "段位只能从这些里选：" + ce.join(" / "),
            "英雄 id 只能从这里选：" + Z.map((m) => `${m.id}(${m.zh})`).join(" / "),
        ),
        p.filter(Boolean).join(`
`)
    );
}
const He = 8;
function Ws({
    mapId: n,
    ally: s = [],
    enemy: t = [],
    vibe: a = "",
    personaBlock: i = "",
    memoryBlock: l = "",
    charName: r = "",
    meName: o = "",
    partyNames: h = [],
    langBlock: c = "",
    coreBlock: x = "",
}) {
    return [
        ae(n),
        "",
        be({ partyNames: h, charName: r, meName: o }),
        "",
        i
            ? `【我方这位角色的人设资料 —— 他在麦里说的话必须像他本人】
` +
              i +
              `
`
            : "",
        x,
        c,
        l
            ? `【你们之间已经发生过的事】
` +
              l +
              `
`
            : "",
        "【双方名单已经定了 —— 名字和英雄不要改】",
        "我方：" +
            s
                .map((p) => `${p.name} · ${fe(p.agent)}${p.isChar ? "←" + r : ""}${p.isMe ? "←我" : ""}`)
                .join("　"),
        "对面：" + t.map((p) => `${p.name} · ${fe(p.agent)}`).join("　"),
        a ? `【选人阶段的印象】${a}` : "",
        "",
        "【这次的任务】名单定了，现在定这一局怎么走：",
        "1. 我方上半场是进攻还是防守；",
        "2. 这一局的**走向**：谁是这局的关键人、哪几个回合是转折点、这局大概会打成什么样；",
        `3. 接下来 ${He} 个回合，每个回合给 2—3 个选项，**每个选项各自写好不同的结果**。`,
        "",
        "【选项怎么写】",
        "· 选项是**我这一回合要怎么打**：去哪、跟谁、交不交技能、要不要赌。",
        "· 三个选项之间要有真实的取舍 —— 不要一个明显最优、两个明显是坑。",
        "· 每个选项的结果不是只有输赢：可能赢了但我死了，可能输了但拿了两个人头留了枪。",
        "· 结果要有随机性，不要让「稳健」永远正确、「赌」永远错。",
        "",
        "【只输出 JSON，不要任何解释】",
        "{",
        ' "side":"attack 或 defense（我方上半场的身份）",',
        ' "arc":"这一局的走向，两三句",',
        ' "keyPlayer":"这局的关键人名字",',
        ' "turningPoints":[转折回合数字],',
        ' "rounds":[{',
        '   "round":1,"phase":"手枪局/eco/强起/full buy","premise":"这个回合开始时的局面，两三句",',
        '   "options":[{',
        '     "id":"a","label":"选项标题（十几个字）","detail":"这么打具体是干嘛",',
        '     "outcome":"选了之后实际打成什么样，四到六句，具体到人、到位置、到枪线",',
        '     "win":true,',
        '     "charMoment":"这个选项下 TA 的一个瞬间，一两句；没有就给空字符串",',
        '     "firstBlood":"拿到首杀的人名，没有就空","clutch":"打出残局的人名，没有就空",',
        '     "kda":[{"name":"谁","k":0,"d":0,"a":0}],',
        '     "partyVoice":[{"name":"","text":""}],"teamVoice":[{"name":"","text":""}],"allVoice":[]',
        "   }]",
        " }]",
        "}",
        "",
        "【每个选项都要把上面这些写满】",
        "这些内容会**直接当成实际发生的事**展示给玩家，不会再有一次生成。",
        "所以 outcome 不能写成概要，要写成成稿；三个频道按上面的频道规则填，不是每个频道都要有人说话。",
        "不同选项的 outcome / charMoment / 麦里的话 **必须真的不一样**，不能只改几个词。",
        "",
        "【KDA 怎么填 —— 两边都要有】",
        "· kda 里**必须同时包含我方和对面**这一回合有变化的人。只给我方的话，对面的数据永远是 0，记分板就是空的。",
        "· 数字要自洽：**我方死几个，对面就杀几个；对面死几个，我方就杀几个。**",
        "· 一个回合每边最多死 5 个，所以单边击杀总数不会超过 5。赢下回合的一方不一定团灭对面（可能是包爆了或时间到）。",
        "· 助攻只给真的参与了那个击杀的人，不要每个人都洒一个。",
    ].filter(Boolean).join(`
`);
}
function Qs({
    mapId: n,
    live: s,
    chosen: t,
    personaBlock: a = "",
    charName: i = "",
    meName: l = "",
    partyNames: r = [],
    langBlock: o = "",
    coreBlock: h = "",
}) {
    var m, d;
    const c = (s.log || [])
            .slice(-6)
            .map(
                (j) =>
                    `第 ${j.round} 回合（${j.win ? "赢" : "输"}）：${j.chosenLabel} → ${String(j.narration || "").slice(0, 120)}`,
            ),
        x = (s.saidLog || [])
            .slice(-10)
            .map(
                (j) =>
                    `[${j.channel === "all" ? "全体" : j.channel === "party" ? "房间麦" : "队伍麦"}] ${j.name}：${j.text}`,
            ),
        p = !!t.custom;
    return [
        ae(n),
        "",
        be({ partyNames: r, charName: i, meName: l }),
        "",
        a
            ? `【${i} 的人设资料 —— 他在麦里的每句话都必须像他本人】
${a}
`
            : "",
        h,
        o,
        `【当前比分】我方 ${s.score.ally} : ${s.score.enemy} 对面　（第 ${s.roundNo} 回合，我方${s.side === "attack" ? "进攻" : "防守"}）`,
        `【这局的走向】${s.arc || "（还没定）"}`,
        "",
        "【我方】" +
            (((m = s.roster) == null ? void 0 : m.ally) || [])
                .map((j) => `${j.name} · ${fe(j.agent)}${j.isChar ? "←" + i : ""}${j.isMe ? "←我" : ""}`)
                .join("　"),
        "【对面】" +
            (((d = s.roster) == null ? void 0 : d.enemy) || [])
                .map((j) => `${j.name} · ${fe(j.agent)}`)
                .join("　"),
        "",
        c.length
            ? `【前面几个回合】
` +
              c.join(`
`) +
              `
`
            : "",
        x.length
            ? `【麦里说过的话 —— 这些会影响队友和对面对我的态度】
` +
              x.join(`
`) +
              `
`
            : "",
        p
            ? `【我这个回合自己想了个打法】${t.label}
这不是预设选项 —— 判断它在这张图这个局面下**可不可行**：
· 想法好 → 就让它成立，甚至打出奇效；
· 想法离谱（技能没有、地形不存在、经济买不起）→ 让它失败，并且说清楚为什么，别假装它成功了。`
            : `【我这个回合选了】${t.label} —— ${t.detail || ""}${
                  t.outcome
                      ? `
【原本计划的结果】${t.outcome}`
                      : ""
              }`,
        "",
        "【这次的任务】",
        '1. 把这个回合**实际打成什么样**写出来 —— 具体到人、到位置、到枪线，不要写成"我们赢了"这种空话；',
        `2. **单独写一条 ${i} 这个回合的瞬间**（charMoment）：他做了什么、有没有替我做什么、有没有因为我做的事有反应。`,
        "   这一条是这个模拟器存在的理由 —— 我玩这个就是为了和他一起打游戏的感觉。",
        "   但**不要每回合都编一个甜的**：他可能只是在报点、可能在骂路人、可能这回合根本没空管我。真实比甜更重要。",
        "   这一条允许为空字符串（他这回合确实没什么值得单写的）。",
        "3. 给出这个回合的击杀数据；",
        `4. 重算接下来 ${He} 个回合的情况和选项 —— 刚才发生的事和麦里说的话必须真的影响到它们；`,
        "5. 三个频道分别该有谁说话 —— 按上面的频道规则，不要每个频道都塞满。",
        "",
        "【只输出 JSON，不要任何解释】",
        "{",
        ' "narration":"这个回合的战况，四到六句",',
        ` "charMoment":"${i} 这回合的一个瞬间，一两句；没有就给空字符串",`,
        ' "win":true,',
        ' "firstBlood":"拿到首杀的人名，没有就空",',
        ' "clutch":"打出残局的人名，没有就空",',
        ' "kda":[{"name":"谁","k":0,"d":0,"a":0}],',
        ' "partyVoice":[{"name":"谁","text":"说了什么"}],',
        ' "teamVoice":[{"name":"谁","text":""}],',
        ' "allVoice":[{"name":"谁","text":""}],',
        ' "arc":"更新后的走向",',
        ' "rounds":[{"round":0,"phase":"","premise":"","options":[{"id":"a","label":"","detail":"","outcome":"","win":true,"kills":0,"deaths":0,"assists":0}]}]',
        "}",
        "",
        "kda 里只写这个回合有变化的人，名字必须和上面名单对得上。",
        "",
        "【KDA 怎么填 —— 两边都要有】",
        "· kda 里**必须同时包含我方和对面**这一回合有变化的人。只给我方的话，对面的数据永远是 0，记分板就是空的。",
        "· 数字要自洽：**我方死几个，对面就杀几个；对面死几个，我方就杀几个。**",
        "· 一个回合每边最多死 5 个，所以单边击杀总数不会超过 5。赢下回合的一方不一定团灭对面（可能是包爆了或时间到）。",
        "· 助攻只给真的参与了那个击杀的人，不要每个人都洒一个。",
        "partyVoice 里只能出现房间麦里的人：" + (r.join("、") || "（只有我）") + "。",
    ].filter(Boolean).join(`
`);
}
function Zs({
    mapId: n,
    live: s,
    channel: t,
    text: a,
    meName: i,
    personaBlock: l = "",
    charName: r = "",
    partyNames: o = [],
    langBlock: h = "",
    coreBlock: c = "",
}) {
    var d, j;
    const x = (s.saidLog || [])
            .slice(-12)
            .map(
                ($) =>
                    `[${$.channel === "all" ? "全体" : $.channel === "party" ? "房间麦" : "队伍麦"}] ${$.name}：${$.text}`,
            ),
        p = t === "all" ? "全体频道" : t === "party" ? "房间麦" : "队伍麦",
        m =
            t === "party"
                ? [
                      `· 这是房间麦，**只有${o.join("、") || "我们几个"}听得见** —— 路人队友和对面都听不见。`,
                      `· 所以${r}在这儿可以说只想让我听见的话。这一条不要浪费。`,
                      "· teamVoice 和 allVoice 必须是空数组 —— 这句话他们根本没听见。",
                  ]
                : t === "all"
                  ? [
                        "· 这是全体频道，**对面看得见**。该回的人回我；我方也可能有人接话或者让我别打字了。",
                        "· 游戏里全体是打字的，所以回的话偏短、像扣字。",
                        "· 房间麦里的人可能会在房间麦里私下吐槽我刚才那句 —— 这种情况 partyVoice 才有内容。",
                    ]
                  : [
                        "· 这是队伍麦，我方 5 个人听得见（包括三个路人），对面听不见。allVoice 必须是空数组。",
                        "· 有外人在场，亲密的话不会在这儿说 —— 要说也是转到房间麦里说。",
                    ];
    return [
        ae(n),
        "",
        be({ partyNames: o, charName: r, meName: i }),
        "",
        l
            ? `【${r} 的人设资料 —— 他开口就必须像他本人】
${l}
`
            : "",
        c,
        h,
        `【当前比分】我方 ${s.score.ally} : ${s.score.enemy} 对面　（第 ${s.roundNo} 回合）`,
        "【我方】" +
            (((d = s.roster) == null ? void 0 : d.ally) || [])
                .map(($) => `${$.name} · ${fe($.agent)}${$.isChar ? "←" + r : ""}`)
                .join("　"),
        "【对面】" +
            (((j = s.roster) == null ? void 0 : j.enemy) || [])
                .map(($) => `${$.name} · ${fe($.agent)}`)
                .join("　"),
        x.length
            ? `
【刚才麦里的话】
` +
              x.join(`
`)
            : "",
        "",
        `【我刚在${p}说】${i}：${a}`,
        "",
        "【这次的任务】",
        ...m,
        `· ${r} 如果该开口就开口 —— 但不是每句话他都必须接。他接不接、怎么接，由他的人设和此刻的局面决定。`,
        "· 不是所有人都会回。一两个人回是正常的，有时候没人理我也是正常的。",
        "· 这句话如果会改变后面的打法（我指挥了一个战术、我把队友惹毛了、我让对面记住我了），就在 shift 里写清楚，并重写后续回合。",
        "",
        "【只输出 JSON，不要任何解释】",
        "{",
        ' "partyVoice":[{"name":"","text":""}],',
        ' "teamVoice":[{"name":"","text":""}],',
        ' "allVoice":[{"name":"","text":""}],',
        ' "shift":"这句话对后面对局的影响，一句话；没影响就空字符串",',
        ' "rounds":[]',
        "}",
        "",
        "rounds 只在确实需要改写后续回合时才填，不需要就给空数组。",
    ].filter(Boolean).join(`
`);
}
function qs({
    personaBlock: n = "",
    memoryBlock: s = "",
    charName: t = "",
    meName: a = "我",
    charAcct: i = null,
    history: l = [],
    text: r = "",
    langBlock: o = "",
    coreBlock: h = "",
}) {
    return [
        ae(null),
        "",
        `【场景】你和${a}正在无畏契约的组队大厅里，准备一起开一局排位。你是${t}。`,
        n
            ? `
【你的人设资料 —— 你说的每句话都必须像你本人】
` + n
            : "",
        h,
        o,
        s
            ? `
【你们之间已经发生过的事】
` + s
            : "",
        i
            ? `
【你现在用的号】${i.name}#${i.tag} · ${i.rank} · ${i.acs} ACS`
            : `
【你现在还没进队】`,
        l.length
            ? `
【刚才聊了什么】
` +
              l.slice(-8).map((c) => `${c.who === "me" ? a : t}：${c.text}`).join(`
`)
            : "",
        `
【${a}刚说】${r}`,
        "",
        "【这次的任务】",
        "· 正常回她 —— 用你自己的说话方式，一到三条短消息，像在语音房里随口聊。",
        "· 同时判断：**这句话是不是在要求你换号或者改号？**",
        "  （比如让你开小号陪她打、让你换个位置、嫌你段位太高带不动她 —— 说法有无数种，看意思，不要只看字面。）",
        '  是 → action 填 "new_account"，并把她的要求归纳进 hint（要什么样的号）。',
        '  只是想改某个字段（比如改个 ID）→ action 填 "edit_account"，hint 写清楚改什么。',
        '  不是 → action 填 "none"，hint 留空。',
        '· **你可以不答应。**如果按你的人设这会儿不想开小号，那就 action 填 "none"，在 reply 里把不答应说出来。',
        "",
        "【只输出 JSON，不要任何解释】",
        '{"reply":["一条消息","可选的第二条"],"action":"none 或 new_account 或 edit_account","hint":""}',
    ].filter(Boolean).join(`
`);
}
function Xs({ result: n, acs: s = 0, mvp: t = !1, rng: a = Math.random }) {
    const i = n === "win" ? 16 + Math.round(a() * 8) : -(13 + Math.round(a() * 8));
    let l = 0;
    return (
        s >= 300 ? (l = n === "win" ? 6 : 5) : s >= 230 ? (l = 3) : s < 140 && (l = -3),
        t && (l += 3),
        i + l
    );
}
function ea(n, s) {
    const t = ce.indexOf(n == null ? void 0 : n.rank);
    let a = t >= 0 ? t : ce.indexOf("黄金 1"),
        i = (Number(n == null ? void 0 : n.rr) || 0) + s,
        l = !1,
        r = !1;
    for (; i >= 100 && a < ce.length - 1; ) ((i -= 100), (a += 1), (l = !0));
    for (; i < 0 && a > 0; ) ((i += 100), (a -= 1), (r = !0));
    return (
        i >= 100 && (i = 100),
        i < 0 && (i = 0),
        {
            acct: { ...n, rank: ce[a], rr: i },
            promoted: l,
            demoted: r,
            delta: s,
            from: n == null ? void 0 : n.rank,
            to: ce[a],
        }
    );
}
function na(n, s = "我", t = "TA") {
    var x, p, m;
    const a = (n || []).filter(Boolean);
    if (!a.length) return "";
    if (a.length === 1) return oa(a[0], s, t);
    const i = a.filter((d) => d.result === "win").length,
        l = [
            ...new Set(
                a.map((d) => {
                    var j;
                    return ((j = oe(d.map)) == null ? void 0 : j.name) || d.map;
                }),
            ),
        ],
        r = a.reduce((d, j) => {
            var $;
            return d + ((($ = j.myKda) == null ? void 0 : $.k) || 0);
        }, 0),
        o = a.reduce((d, j) => {
            var $;
            return d + ((($ = j.myKda) == null ? void 0 : $.d) || 0);
        }, 0),
        h = a.slice().sort((d, j) => {
            var $, z, D, K;
            return (
                ((($ = j.myKda) == null ? void 0 : $.k) || 0) -
                (((z = j.myKda) == null ? void 0 : z.d) || 0) -
                ((((D = d.myKda) == null ? void 0 : D.k) || 0) -
                    (((K = d.myKda) == null ? void 0 : K.d) || 0))
            );
        })[0],
        c = a.flatMap((d) => d.highlights || []).slice(0, 2);
    return [
        `${s} 和 ${t} 连着打了 ${a.length} 把无畏契约，${i} 胜 ${a.length - i} 负`,
        `（${l.slice(0, 3).join("、")}）`,
        `。${s} 一共 ${r} 杀 ${o} 死`,
        h
            ? `，打得最好的一把是 ${((x = oe(h.map)) == null ? void 0 : x.name) || h.map} ${(p = h.score) == null ? void 0 : p.ally}:${(m = h.score) == null ? void 0 : m.enemy}`
            : "",
        c.length ? `。${c.join("；")}` : "",
        "。",
    ].join("");
}
function sa(n, s) {
    const t = Math.max(1, Math.round(Number(s) || 1));
    return (Number(n) || 0) >= t;
}
function aa({
    match: n,
    personaBlock: s = "",
    charName: t = "",
    meName: a = "",
    rr: i = null,
    partyNames: l = [],
    langBlock: r = "",
    coreBlock: o = "",
}) {
    var p, m;
    const h = oe(n.map),
        c = n.myKda ? `${n.myKda.k}/${n.myKda.d}/${n.myKda.a}` : "",
        x = Object.entries(n.kda || {}).find(([d]) => {
            var j;
            return (((j = n.roster) == null ? void 0 : j.ally) || []).some(($) => $.name === d && $.isChar);
        });
    return [
        ae(n.map),
        "",
        be({ partyNames: l, charName: t, meName: a }),
        "",
        s
            ? `【你的人设资料 —— 你说的每句话都必须像你本人】
${s}
`
            : "",
        o,
        r,
        `【刚打完这一局】${h ? h.name : n.map} · ${n.result === "win" ? "赢了" : "输了"} ${n.score.ally}:${n.score.enemy}`,
        `【${a}】用${((p = _(n.myAgent)) == null ? void 0 : p.zh) || n.myAgent}，${c}${n.mvp === n.myName ? "，本场 MVP" : ""}`,
        x ? `【你自己】${x[1].k}/${x[1].d}/${x[1].a}` : "",
        i
            ? `【${a} 的段位】${i.delta >= 0 ? "+" : ""}${i.delta} RR${i.promoted ? `，升到 ${i.to}` : i.demoted ? `，掉到 ${i.to}` : ""}`
            : "",
        (m = n.highlights) != null && m.length ? `【这局印象最深的】${n.highlights.join("；")}` : "",
        "",
        "【这次的任务】结算界面还开着，你们还在房间麦里。说两三句。",
        "· 说的是**这一局真实发生过的事** —— 上面写着的那些。不要说一段放之四海皆准的赛后感言。",
        `· 赢了怎么说、输了怎么说、${a}打得好还是打得烂你怎么说，全部由你的人设决定。`,
        "  嘴硬的人不会突然夸；话少的人不会突然说一段。",
        "· 这是房间麦，没有外人。",
        '· 一句话说完就结束，不要给每句都缀一个"证明我是那种人"的尾巴。',
        "",
        '【只输出 JSON】{"lines":["第一句","第二句"]}',
    ].filter(Boolean).join(`
`);
}
function ta(n) {
    const s = Number(n == null ? void 0 : n.ally) || 0,
        t = Number(n == null ? void 0 : n.enemy) || 0,
        a = Math.max(s, t),
        i = Math.min(s, t),
        l = () => (s > t ? "win" : "loss");
    return (a >= 13 && i <= 11) || (a >= 14 && a - i >= 2) ? l() : null;
}
function Zn(n, s) {
    const t = (i) => (i === "attack" ? "defense" : "attack"),
        a = Number(s) || 1;
    return a <= 12 ? n : a <= 24 ? t(n) : (a - 25) % 2 === 0 ? n : t(n);
}
function ia(n) {
    return Number(n) === 13;
}
function la(n, s, t = []) {
    const a = new Set(t.map((l) => l.name)),
        i = { ...(n || {}) };
    for (const l of s || []) {
        const r = l == null ? void 0 : l.name;
        if (!r || !a.has(r)) continue;
        const o = i[r] || { k: 0, d: 0, a: 0 };
        i[r] = { k: o.k + (Number(l.k) || 0), d: o.d + (Number(l.d) || 0), a: o.a + (Number(l.a) || 0) };
    }
    return i;
}
function _e(n, s) {
    const t = Math.max(1, Number(s) || 1),
        a = Number(n == null ? void 0 : n.k) || 0,
        i = Number(n == null ? void 0 : n.a) || 0;
    return Math.round((a * 210 + i * 55) / t);
}
function ra({ result: n, score: s, myKda: t, rounds: a, withChar: i, mvp: l }) {
    const r = [],
        o = (d, j) => {
            j && r.push({ label: d, value: j });
        };
    o(n === "win" ? "拿下这局" : "打满一局", n === "win" ? 100 : 30);
    const h = Number(t == null ? void 0 : t.k) || 0,
        c = Number(t == null ? void 0 : t.d) || 0,
        x = Number(t == null ? void 0 : t.a) || 0;
    (o(`击杀 ${h}`, h * 5), o(`助攻 ${x}`, x * 2));
    const p = _e(t, a);
    return (
        p >= 300 ? o(`ACS ${p} · carry`, 60) : p >= 230 && o(`ACS ${p} · 打得不错`, 30),
        c === 0 && a >= 5 && o("一整局没死", 80),
        l && o("本场 MVP", 50),
        i && o("和 TA 一起打的", 40),
        a > 24 && o("打进加时", 40),
        { total: r.reduce((d, j) => d + j.value, 0), items: r }
    );
}
function ca(n, s = "") {
    return {
        owner: n,
        name: s,
        tag: "",
        rank: "黄金 1",
        rr: 0,
        level: 1,
        server: Q,
        winrate: "",
        acs: 0,
        kd: "",
        hs: "",
        mainAgents: [],
        playstyle: "",
        note: "",
        real: !1,
        playedMatches: 0,
    };
}
function Dn(n, s, t = "") {
    const a = ca(s, t);
    if (!n || typeof n != "object") return a;
    const i = Array.isArray(n.mainAgents)
        ? n.mainAgents
              .map((l) => String(l || "").toLowerCase())
              .filter((l) => _(l))
              .slice(0, 3)
        : [];
    return {
        ...a,
        name: String(n.name || t || "").slice(0, 24),
        tag: String(n.tag || "")
            .replace(/[^\w]/g, "")
            .slice(0, 5),
        rank: ce.includes(n.rank) ? n.rank : String(n.rank || a.rank).slice(0, 8),
        rr: Math.max(0, Math.min(100, Math.round(Number(n.rr) || 0))),
        level: Math.max(1, Math.round(Number(n.level) || 1)),
        winrate: String(n.winrate || "").slice(0, 8),
        acs: Math.max(0, Math.round(Number(n.acs) || 0)),
        kd: String(n.kd || "").slice(0, 8),
        hs: String(n.hs || "").slice(0, 8),
        mainAgents: i,
        playstyle: String(n.playstyle || "").slice(0, 60),
        note: String(n.note || "").slice(0, 80),
        server: Hs.includes(n.server) ? n.server : a.server,
    };
}
function oa(n, s = "我", t = "TA") {
    var h, c, x, p, m;
    if (!n) return "";
    const a = oe(n.map),
        i = `${s} 和 ${t} 在 ${a ? a.name : n.map} 打了一局无畏契约，${n.result === "win" ? "赢了" : "输了"} ${((h = n.score) == null ? void 0 : h.ally) ?? 0}:${((c = n.score) == null ? void 0 : c.enemy) ?? 0}`,
        l = n.myKda
            ? `。${s} 用${((x = _(n.myAgent)) == null ? void 0 : x.zh) || n.myAgent || "?"}，${n.myKda.k}/${n.myKda.d}/${n.myKda.a}`
            : "",
        r = (p = n.charMoments) != null && p.length ? `。${t}：${n.charMoments.slice(0, 2).join("；")}` : "",
        o = (m = n.highlights) != null && m.length ? `。${n.highlights.slice(0, 2).join("；")}` : "";
    return i + l + r + o + "。";
}
function ua(n = [], s = 3) {
    return (n || [])
        .map((a) => {
            let l = (Number(a.roundKills) || 0) * 2;
            return (a.pistol && (l += 3), a.clutch && (l += 5), a.turning && (l += 4), { l: a, weight: l });
        })
        .sort((a, i) => i.weight - a.weight)
        .slice(0, s)
        .filter((a) => a.weight > 0)
        .map(
            (a) =>
                `第 ${a.l.round} 回合${a.l.chosenLabel ? "「" + a.l.chosenLabel + "」" : ""}${a.l.win ? "拿下" : "没守住"}`,
        );
}
function da({
    mapId: n,
    allySlots: s = [],
    myAgent: t,
    personaBlock: a = "",
    charName: i = "",
    meName: l = "",
    partyNames: r = [],
    langBlock: o = "",
    coreBlock: h = "",
}) {
    var c;
    return [
        ae(n),
        "",
        be({ partyNames: r, charName: i, meName: l }),
        "",
        a
            ? `【${i} 的人设资料 —— 他在麦里说的每句话都必须像他本人】
${a}
`
            : "",
        h,
        o,
        "【已经确定的我方成员 —— 名字和英雄不要改】",
        ...s.map((x) => {
            var p;
            return `· ${x.name}${x.agent ? `（${((p = _(x.agent)) == null ? void 0 : p.zh) || x.agent}）` : "（还没选）"}${x.isChar ? ` ←${i} 本人` : ""}${x.isMe ? " ←我" : ""}`;
        }),
        t
            ? `
【我刚选了】${((c = _(t)) == null ? void 0 : c.zh) || t}`
            : "",
        "",
        "【这次的任务】这是选人阶段，还没进对局。",
        "1. 补齐我方剩下的**路人队友**（凑满 5 人）。他们是陌生人，会有自己的脾气：",
        '   有人秒锁决斗者、有人一直不选、有人嘴上说"我随便"然后抢了位置。',
        "   看看我方阵容缺什么（控场？守卫？），让他们的选择**合理但不完美** —— 真实的路人队不会正好凑出教科书阵容。",
        "2. 补齐对面完整的 5 个人（名字 + 英雄）。",
        "3. 写这段选人阶段里说的话：",
        '   · 队伍麦：路人之间为位置的拉扯、报位置、"谁补控场"。这是这一段的主要声音。',
        `   · 房间麦：${i} 跟我说的话 —— 只有我们几个听得见。他可能吐槽路人、可能问我玩什么、可能什么都不说。`,
        "   · 全体：选人阶段通常没人在全体说话，除非对面先挑衅。大多数时候应该是空数组。",
        "4. 给这局定个基调（vibe）：这支队看起来靠不靠谱、气氛如何。一句话。",
        "",
        "【只输出 JSON，不要任何解释】",
        "{",
        ' "allies":[{"name":"路人名字","agent":"英雄id","note":"一句话这人什么样"}],',
        ' "enemy":[{"name":"","agent":"英雄id","note":""}],',
        ' "partyVoice":[{"name":"","text":""}],',
        ' "teamVoice":[{"name":"","text":""}],',
        ' "allVoice":[{"name":"","text":""}],',
        ' "vibe":"这支队看起来怎么样，一句话"',
        "}",
        "",
        "allies 里**只写要补的路人**，已经确定的成员不要重复写进去。",
        "英雄 id 只能从这里选：" + Z.map((x) => x.id).join(" / "),
    ].filter(Boolean).join(`
`);
}
const En = 75,
    ha = ["duelist", "initiator", "controller", "sentinel"],
    Fn = {
        cn: [
            "Nightfall",
            "MiaoWu",
            "Zhihen",
            "LanTing",
            "Kuro",
            "BaiYe",
            "QingZhou",
            "XiaoMan",
            "Yuchen",
            "Fenglin",
        ],
        kr: [
            "Jinwoo",
            "Haneul",
            "Seorin",
            "Minjae",
            "Dohyun",
            "Yerin",
            "Chanwoo",
            "Sooyoung",
            "Taemin",
            "Narae",
        ],
        jp: ["Sora", "Kaede", "Ryuji", "Hinata", "Tsukasa", "Ayame", "Renji", "Mizuki", "Haruto", "Nanase"],
        na: ["Vex", "Slate", "Duskk", "Ryder", "Nova", "Crank", "Fable", "Zeph", "Moss", "Quill"],
        eu: ["Milo", "Aksel", "Nuvo", "Bram", "Esco", "Tavi", "Ronne", "Luka", "Pike", "Sable"],
        ap: ["Rin", "Zyn", "Aki", "Bimo", "Krit", "Nael", "Tavo", "Juno", "Peng", "Sai"],
        hk: [
            "KaiChun",
            "Siuming",
            "HoYin",
            "Mango",
            "WingC",
            "Tszho",
            "Lokman",
            "Chunhei",
            "Yatlong",
            "Poyan",
        ],
        tw: ["阿丹", "小魚", "Yuhao", "木木", "Shin", "柚子", "Kai", "阿澤", "Nono", "小賴"],
    };
function ma(n, s, t = Math.random) {
    const a = Fn[n] || Fn.cn,
        i = a.filter((h) => !s.has(h)),
        l = i.length ? i[Math.floor(t() * i.length)] : a[Math.floor(t() * a.length)];
    let r = l,
        o = 2;
    for (; s.has(r); ) ((r = `${l}${o}`), o++);
    return (s.add(r), r);
}
function fa(n, s = Math.random) {
    const t = qn([...n]),
        a = (t.length ? Wn(t[0]) : Z).filter((l) => !n.has(l.id)),
        i = (a.length ? a : Z)[Math.floor(s() * (a.length || Z.length))];
    return (n.add(i.id), i.id);
}
function pa({ ally: n = [], enemy: s = [], serverId: t = Q, size: a = 5, rng: i = Math.random } = {}) {
    const l = new Set([...n, ...s].map((o) => (o == null ? void 0 : o.name)).filter(Boolean)),
        r = (o) => {
            const h = o.filter(Boolean).slice(0, a),
                c = new Set(h.map((x) => (x == null ? void 0 : x.agent)).filter(Boolean));
            for (; h.length < a; ) h.push({ name: ma(t, l, i), agent: fa(c, i), note: "", filler: !0 });
            return h;
        };
    return { ally: r(n), enemy: r(s) };
}
function qn(n = []) {
    const s = new Set(
        n
            .map((t) => {
                var a;
                return (a = _(t)) == null ? void 0 : a.role;
            })
            .filter(Boolean),
    );
    return ha.filter((t) => !s.has(t));
}
function xa({
    mapId: n,
    live: s,
    batchRounds: t = He,
    personaBlock: a = "",
    charName: i = "",
    meName: l = "",
    partyNames: r = [],
    langBlock: o = "",
    coreBlock: h = "",
}) {
    var p, m;
    const c = (s.log || [])
            .slice(-10)
            .map(
                (d) =>
                    `第 ${d.round} 回合（${d.win ? "赢" : "输"}）：${d.chosenLabel}${d.custom ? "（自己想的打法）" : ""} → ${String(d.narration || "").slice(0, 100)}`,
            ),
        x = (s.saidLog || [])
            .slice(-14)
            .map(
                (d) =>
                    `[${d.channel === "all" ? "全体" : d.channel === "party" ? "房间麦" : "队伍麦"}] ${d.name}：${d.text}`,
            );
    return [
        ae(n),
        "",
        be({ partyNames: r, charName: i, meName: l }),
        "",
        a
            ? `【${i} 的人设资料 —— 他在麦里说的每句话都必须像他本人】
${a}
`
            : "",
        h,
        o,
        `【当前比分】我方 ${s.score.ally} : ${s.score.enemy} 对面　（下一个是第 ${s.roundNo} 回合，我方${s.side === "attack" ? "进攻" : "防守"}）`,
        `【这局的走向】${s.arc || "（还没定）"}`,
        "",
        "【我方】" +
            (((p = s.roster) == null ? void 0 : p.ally) || [])
                .map((d) => `${d.name} · ${fe(d.agent)}${d.isChar ? "←" + i : ""}${d.isMe ? "←我" : ""}`)
                .join("　"),
        "【对面】" +
            (((m = s.roster) == null ? void 0 : m.enemy) || [])
                .map((d) => `${d.name} · ${fe(d.agent)}`)
                .join("　"),
        "",
        c.length
            ? `【已经打过的回合】
` +
              c.join(`
`) +
              `
`
            : "",
        x.length
            ? `【麦里说过的话 —— 这些会影响队友和对面对我的态度】
` +
              x.join(`
`) +
              `
`
            : "",
        `【这次的任务】接着往下排第 ${s.roundNo} 到第 ${s.roundNo + t - 1} 回合。`,
        "· 上面发生过的事和说过的话**必须真的影响到**这几个回合：连败了经济会崩、",
        "  在全体频道挑衅过对面会被针对、跟队友吵过架队伍会散、TA 那边的态度也会变。",
        "· 顺手更新一下这局的走向（arc）。",
        '· 比分快到 13 了就把节奏收紧，不要还在写"漫长的拉锯"。',
        "",
        "【只输出 JSON，不要任何解释】",
        "{",
        ' "arc":"更新后的走向",',
        ' "rounds":[{',
        '   "round":' + s.roundNo + ',"phase":"eco/强起/full buy","premise":"这个回合开始时的局面，两三句",',
        '   "options":[{',
        '     "id":"a","label":"选项标题","detail":"这么打具体是干嘛",',
        '     "outcome":"选了之后实际打成什么样，四到六句","win":true,',
        '     "charMoment":"这个选项下 TA 的一个瞬间，一两句；没有就空字符串",',
        '     "firstBlood":"","clutch":"",',
        '     "kda":[{"name":"谁","k":0,"d":0,"a":0}],',
        '     "partyVoice":[{"name":"","text":""}],"teamVoice":[{"name":"","text":""}],"allVoice":[]',
        "   }]",
        " }]",
        "}",
        "",
        "【每个选项都要把上面这些写满】",
        "这些内容会**直接当成实际发生的事**展示给玩家，不会再有一次生成。",
        "outcome 要写成成稿不是概要；不同选项之间必须真的不一样。",
        "",
        "【KDA 怎么填 —— 两边都要有】",
        "· kda 里**必须同时包含我方和对面**这一回合有变化的人。只给我方的话，对面的数据永远是 0，记分板就是空的。",
        "· 数字要自洽：**我方死几个，对面就杀几个；对面死几个，我方就杀几个。**",
        "· 一个回合每边最多死 5 个，所以单边击杀总数不会超过 5。赢下回合的一方不一定团灭对面（可能是包爆了或时间到）。",
        "· 助攻只给真的参与了那个击杀的人，不要每个人都洒一个。",
    ].filter(Boolean).join(`
`);
}
function On(n, s, t = "") {
    var x, p;
    const a = !!s.win,
        i = (n.roundNo || 1) + 1,
        l = (((x = n.roster) == null ? void 0 : x.ally) || []).concat(
            ((p = n.roster) == null ? void 0 : p.enemy) || [],
        ),
        r = Array.isArray(s.kda) ? s.kda : [],
        o = la(n.kda, r, l),
        h = r.find((m) => m.name === n.myName) || {},
        c = [
            ...(s.partyVoice || []).map((m) => ({ ...m, channel: "party" })),
            ...(s.teamVoice || []).map((m) => ({ ...m, channel: "team" })),
            ...(s.allVoice || []).map((m) => ({ ...m, channel: "all" })),
        ]
            .map((m) => ({
                channel: m.channel,
                name: String(m.name || "?"),
                text: String(m.text || ""),
                isChar: !!t && m.name === t,
                round: n.roundNo,
                phase: "post",
                at: Date.now(),
            }))
            .filter((m) => m.text);
    return {
        ...n,
        roundNo: i,
        side: Zn(n.startSide, i),
        score: { ally: n.score.ally + (a ? 1 : 0), enemy: n.score.enemy + (a ? 0 : 1) },
        kda: o,
        log: [
            ...(n.log || []),
            {
                round: n.roundNo,
                chosenLabel: s.label,
                custom: !!s.custom,
                narration: String(s.outcome || ""),
                charMoment: String(s.charMoment || ""),
                firstBlood: String(s.firstBlood || ""),
                clutch: String(s.clutch || ""),
                win: a,
                roundKills: Number(h.k) || 0,
                pistol: n.roundNo === 1 || n.roundNo === 13,
                turning: (n.turningPoints || []).includes(n.roundNo),
            },
        ],
        saidLog: [...(n.saidLog || []), ...c],
    };
}
function Xn(n) {
    return n ? (n.plan || []).filter((s) => Number(s.round) >= n.roundNo).length : 0;
}
function ja({
    meName: n,
    charName: s,
    friends: t = [],
    personaBlock: a = "",
    memoryHits: i = "",
    memoryBlock: l = "",
    hint: r = "",
    seeds: o = {},
    langBlock: h = "",
    coreBlock: c = "",
}) {
    const x = [
            `· me —— 我（${n}）`,
            s ? `· char —— ${s}` : "",
            ...t.map(
                (m, d) =>
                    `· friend${d} —— 我的朋友${m != null && m.name ? `「${m.name}」` : "（还没起名，你来取）"}${m != null && m.note ? `：${m.note}` : ""}`,
            ),
        ].filter(Boolean),
        p = Object.entries(o || {}).flatMap(([m, d]) => {
            if (!d) return [];
            const j = [
                d.name && `ID ${d.name}`,
                d.rank && `段位 ${d.rank}`,
                d.note && `备注 ${d.note}`,
            ].filter(Boolean);
            return j.length ? [`· ${m}：${j.join("，")}`] : [];
        });
    return [
        ae(null),
        "",
        "【这次的任务】一次性给下面这几个人各生成一份无畏契约的账号资料：",
        ...x,
        "",
        i
            ? [
                  "【我们真的聊到过的、跟游戏有关的话 —— 这一段优先级最高】",
                  i,
                  "",
                  "**上面这些是既成事实。**提到过谁什么段位、什么水平、主玩什么，就照那个来，不要自己另编。",
                  "",
              ].join(`
`)
            : "",
        a
            ? `【${s} 的人设资料 —— 他的号要像他本人会注册的号】
${a}
`
            : "",
        c,
        h,
        l
            ? `【其他相处片段（背景，优先级低于上面那段）】
${l}
`
            : "",
        p.length
            ? `【我已经填好的部分 —— 不要改，只补空着的】
${p.join(`
`)}
`
            : "",
        r
            ? `【我的要求】${r}
`
            : "",
        es,
        "",
        "【怎么定数据】",
        "· **这几个人是一起排位的**，所以段位不能差太远 —— 差三个大段以上根本排不到一起。",
        "  但也不必一样：有人带、有人被带，是正常的。上面记忆里说过谁什么段位的，以那个为锚，其他人围着它排。",
        "· ID 的取法要像各自那个人会取的名字，不要三个通用游戏 ID。",
        "· 常用英雄要符合各自的性格和打法，不要三个人都主玩同一个。",
        s ? `· ${s} 的号要从人设资料和你们的相处里推。` : "",
        "",
        "【只输出 JSON，不要任何解释】",
        '{"accounts":{"me":{…},"char":{…},"friend0":{…}}}',
        "每个账号的字段：",
        '{"name":"游戏ID","tag":"四位内的TAG","rank":"段位（中文全称）","rr":0到100的整数,',
        ' "level":账号等级整数,"winrate":"胜率如 53%","acs":平均战斗分整数,"kd":"KD如 1.14",',
        ' "hs":"爆头率如 24%","mainAgents":["英雄id","英雄id"],"playstyle":"一句话打法特点","note":"一句话这个号的来历"}',
        "",
        "段位只能从这些里选：" + ce.join(" / "),
        "英雄 id 只能从这里选：" + Z.map((m) => `${m.id}(${m.zh})`).join(" / "),
        "只输出上面点名的那几个 key，不要多给。",
    ].filter(Boolean).join(`
`);
}
const ba = [
    ...dn,
    Un,
    "段位",
    "上分",
    "掉分",
    "排位",
    "定级",
    "打游戏",
    "开黑",
    "五排",
    "双排",
    "单排",
    "无畏契约",
    "瓦罗兰特",
    "valorant",
    "VALORANT",
    "Valorant",
    "小号",
    "大号",
    "炸鱼",
    "代打",
    "借号",
    "游戏id",
    "游戏ID",
    "游戏名",
    "爆头",
    "acs",
    "ACS",
    "kd",
    "KD",
    "主玩",
    "本命",
    ...Z.map((n) => n.zh),
    ...un.map((n) => n.name),
];
function va(n, s = 18) {
    const t = Array.isArray(n) ? n : [],
        a = [],
        i = [];
    for (const r of t) {
        const o = String((r == null ? void 0 : r.line) || "");
        o && (ba.some((h) => o.includes(h)) ? a : i).push(r);
    }
    const l = Math.max(0, s - a.length);
    return {
        hits: a,
        context: l ? i.slice(-l) : [],
        text: [
            ...a.map((r) => `· ${Be(r.at)}${r.line}`),
            ...(l ? i.slice(-l).map((r) => `· ${Be(r.at)}${r.line}`) : []),
        ]
            .join(
                `
`,
            )
            .slice(0, 3e3),
        hitText: a
            .map((r) => `· ${Be(r.at)}${r.line}`)
            .join(
                `
`,
            )
            .slice(0, 2e3),
    };
}
const es = [
    "【段位不等于这个人的真实水平】",
    "· **开小号**：真实水平很高，但号的段位很低 —— 这种号的特征是段位低、但 ACS / KD / 爆头率明显超出该段位。",
    "· **炸鱼**：高手拿低段号打低分局，数据会离谱地好看。",
    "· **借号 / 代打 / 上过分**：段位和这个人现在的实力对不上。",
    "· **纯粹打得多但不强**：时长很高、等级很高，段位却一般，数据平庸。",
    "· 反过来也有：水平其实不错但心态差、只敢单排，段位一直卡着上不去。",
    "所以**不要从段位倒推数据、也不要从数据倒推段位**，要先想清楚这是个什么号，再让两边都符合那个设定。",
].join(`
`);
function sn(n, s, t) {
    const a = Number(t) || 1,
        i = Array.isArray(s) ? s.filter(Boolean) : [],
        l = i.filter((c) => Number(c.round) >= a),
        r = l.length === 0 && i.length > 0 ? i.map((c, x) => ({ ...c, round: a + x })) : l,
        o = (n || []).filter((c) => Number(c.round) >= a),
        h = new Map(o.map((c) => [Number(c.round), c]));
    for (const c of r) h.set(Number(c.round), c);
    return [...h.values()].sort((c, x) => Number(c.round) - Number(x.round));
}
function ga({
    personaBlock: n = "",
    memoryHits: s = "",
    recentChat: t = [],
    charName: a = "",
    meName: i = "",
    myAcct: l = null,
    nowText: r = "",
    langBlock: o = "",
    coreBlock: h = "",
}) {
    const c = (t || [])
        .slice(-14)
        .filter((x) => String(x.text || "").trim())
        .map((x) => `${Be(x.at)}${x.who === "me" ? i : a}：${String(x.text || "").slice(0, 120)}`);
    return [
        ae(null),
        "",
        `【场景】${i} 在无畏契约里给你发了一张组队邀请，你手机上弹出来了。你是 ${a}。`,
        "",
        n
            ? `【你的人设资料】
${n}
`
            : "",
        h,
        o,
        c.length
            ? ["【你们刚才在聊什么 —— 这一段决定你现在是什么心情，优先级最高】", ...c, ""].join(`
`)
            : `【你们最近没怎么说话。】
`,
        s
            ? `【你们聊到过的、跟游戏有关的话】
${s}
`
            : "",
        l
            ? `【她用的号】${l.name}#${l.tag} · ${l.rank}${l.playstyle ? ` · ${l.playstyle}` : ""}
`
            : "",
        r
            ? `【现在】${r}
`
            : "",
        "【这次的任务】决定你接不接这个邀请，并回她一两句。",
        "",
        "· **你可以拒绝。**这不是走过场 —— 看你此刻真实的状态：",
        "  刚吵完架、正在忙、这个点该睡了、今天已经打过很多把、心情不好，都是真的会拒绝的理由。",
        "· 也可以**答应但带着情绪**：嘴上嫌弃还是去了、答应了但先说清楚只打一把。",
        "· 反方向同样成立：**不要为了显得有脾气而故意拒绝。**",
        "  如果刚才聊得好好的、她难得主动找你玩，那就是该答应的时候。",
        "· 回的话就是你会打字发出去的那一两句，不要写旁白、不要解释你的决定。",
        '· 一句话说完就结束，不要给它缀一个"证明我是那种人"的尾巴。',
        "",
        "【只输出 JSON，不要任何解释】",
        '{"accept":true,"reply":["第一句","可选的第二句"],"reason":"一句话你为什么这么决定（给界面看的，不是说给她听的）"}',
    ].filter(Boolean).join(`
`);
}
const _n = Ms(zs, "Valorant"),
    ya = ["duelist", "initiator", "controller", "sentinel"];
function Na(n) {
    var t;
    if (!n) return "";
    const s = [`名字：${Ls(n)}`];
    return (
        n.age && s.push(`年龄：${n.age}`),
        n.gender && s.push(`性别：${n.gender}`),
        n.signature && s.push(`签名：${n.signature}`),
        n.persona &&
            s.push(`人设正文：
${String(n.persona).slice(0, 1800)}`),
        (t = n.relationStage) != null && t.summary && s.push(`关系阶段：${n.relationStage.summary}`),
        s.join(`
`)
    );
}
function ka(n, s) {
    try {
        const t = Ps(s, n) || [],
            a = va(t, 18);
        return {
            hits: a.hitText,
            context: a.context
                .map((i) => `· ${Be(i.at)}${i.line}`)
                .join(
                    `
`,
                )
                .slice(0, 1200),
        };
    } catch {
        return { hits: "", context: "" };
    }
}
function Ke({ value: n, onChange: s, placeholder: t, rows: a = 3 }) {
    return e.jsx("textarea", {
        className: "val-textarea",
        rows: a,
        value: n || "",
        onChange: (i) => s(i.target.value),
        placeholder: t,
    });
}
function ns({ items: n, value: s, onChange: t }) {
    return e.jsx("div", {
        className: "val-seg",
        children: n.map(([a, i]) =>
            e.jsx("button", { className: s === a ? "on" : "", onClick: () => t(a), children: i }, a),
        ),
    });
}
function an({ acct: n, label: s, sub: t, busy: a, onGen: i, onEdit: l, onPick: r, onRemove: o, accent: h }) {
    return n
        ? e.jsxs("div", {
              className: `val-slot${h ? " accent" : ""}`,
              children: [
                  e.jsxs("div", {
                      className: "val-slot-head",
                      children: [
                          e.jsx("div", { className: "val-slot-label", children: s }),
                          e.jsxs("div", {
                              className: "val-slot-tools",
                              children: [
                                  r &&
                                      e.jsx("button", {
                                          className: "val-icon-btn",
                                          onClick: r,
                                          "aria-label": "换号",
                                          children: e.jsx(Es, { size: 14 }),
                                      }),
                                  e.jsx("button", {
                                      className: "val-icon-btn",
                                      disabled: a,
                                      onClick: i,
                                      "aria-label": "重新生成",
                                      children: a
                                          ? e.jsx(J, { size: 14, className: "spin" })
                                          : e.jsx(Fs, { size: 14 }),
                                  }),
                                  e.jsx("button", {
                                      className: "val-icon-btn",
                                      onClick: l,
                                      "aria-label": "修改",
                                      children: e.jsx(on, { size: 14 }),
                                  }),
                                  o &&
                                      e.jsx("button", {
                                          className: "val-icon-btn",
                                          onClick: o,
                                          "aria-label": "移除",
                                          children: e.jsx(Hn, { size: 14 }),
                                      }),
                              ],
                          }),
                      ],
                  }),
                  e.jsxs("div", {
                      className: "val-acct-id",
                      children: [
                          n.name || "未命名",
                          e.jsxs("span", { className: "val-tag", children: ["#", n.tag || "0000"] }),
                          n.real && e.jsx("span", { className: "val-real", children: "已存在" }),
                      ],
                  }),
                  e.jsxs("div", {
                      className: "val-acct-grid",
                      children: [
                          e.jsxs("div", {
                              children: [e.jsx("i", { children: "段位" }), e.jsx("b", { children: n.rank })],
                          }),
                          e.jsxs("div", {
                              children: [e.jsx("i", { children: "RR" }), e.jsx("b", { children: n.rr ?? 0 })],
                          }),
                          e.jsxs("div", {
                              children: [
                                  e.jsx("i", { children: "胜率" }),
                                  e.jsx("b", { children: n.winrate || "—" }),
                              ],
                          }),
                          e.jsxs("div", {
                              children: [
                                  e.jsx("i", { children: "ACS" }),
                                  e.jsx("b", { children: n.acs || "—" }),
                              ],
                          }),
                          e.jsxs("div", {
                              children: [
                                  e.jsx("i", { children: "K/D" }),
                                  e.jsx("b", { children: n.kd || "—" }),
                              ],
                          }),
                          e.jsxs("div", {
                              children: [
                                  e.jsx("i", { children: "爆头" }),
                                  e.jsx("b", { children: n.hs || "—" }),
                              ],
                          }),
                      ],
                  }),
                  !!(n.mainAgents || []).length &&
                      e.jsx("div", {
                          className: "val-acct-agents",
                          children: n.mainAgents.map((c) => {
                              var x;
                              return e.jsx(
                                  "span",
                                  { children: ((x = _(c)) == null ? void 0 : x.zh) || c },
                                  c,
                              );
                          }),
                      }),
                  n.playstyle && e.jsx("div", { className: "val-acct-note", children: n.playstyle }),
                  n.note && e.jsx("div", { className: "val-acct-note dim", children: n.note }),
              ],
          })
        : e.jsxs("div", {
              className: `val-slot empty${h ? " accent" : ""}`,
              children: [
                  e.jsx("div", { className: "val-slot-label", children: s }),
                  e.jsx("div", { className: "val-slot-sub", children: t }),
                  e.jsxs("div", {
                      className: "val-slot-actions",
                      children: [
                          e.jsxs("button", {
                              className: "val-btn primary",
                              disabled: a,
                              onClick: i,
                              children: [
                                  a ? e.jsx(J, { size: 14, className: "spin" }) : e.jsx(Jn, { size: 14 }),
                                  a ? "生成中" : "邀请并生成",
                              ],
                          }),
                          r && e.jsx("button", { className: "val-btn", onClick: r, children: "选已有的号" }),
                      ],
                  }),
              ],
          });
}
function $a({ open: n, acct: s, onClose: t, onSave: a, chars: i = [] }) {
    const [l, r] = y.useState(null);
    if (
        (y.useEffect(() => {
            r(s ? { ...s } : null);
        }, [s, n]),
        !l)
    )
        return null;
    const o = (c, x) => r((p) => ({ ...p, [c]: x })),
        h = (c) =>
            r((x) => {
                const p = x.mainAgents || [];
                return { ...x, mainAgents: p.includes(c) ? p.filter((m) => m !== c) : [...p, c].slice(0, 3) };
            });
    return e.jsx(Is, {
        open: n,
        onClose: t,
        title: "账号资料",
        children: e.jsxs("div", {
            className: "px-4 pb-6",
            children: [
                e.jsx(me, {
                    header: "身份",
                    children: e.jsxs("div", {
                        className: "val-form-row",
                        children: [
                            e.jsx(he, {
                                value: l.name,
                                onChange: (c) => o("name", c),
                                placeholder: "游戏 ID",
                            }),
                            e.jsx(he, { value: l.tag, onChange: (c) => o("tag", c), placeholder: "TAG" }),
                        ],
                    }),
                }),
                e.jsx(me, {
                    header: "大区",
                    footer: "号属于哪个区。改了之后它只会在那个区的队伍里出现。",
                    children: e.jsx("div", {
                        className: "val-chip-wrap",
                        children: $e.map((c) =>
                            e.jsx(
                                "button",
                                {
                                    className: `val-chip${(l.server || Q) === c.id ? " on" : ""}`,
                                    onClick: () => o("server", c.id),
                                    children: c.label,
                                },
                                c.id,
                            ),
                        ),
                    }),
                }),
                e.jsx(me, {
                    header: "段位",
                    children: e.jsx("div", {
                        className: "val-chip-wrap",
                        children: ce.map((c) =>
                            e.jsx(
                                "button",
                                {
                                    className: `val-chip${l.rank === c ? " on" : ""}`,
                                    onClick: () => o("rank", c),
                                    children: c,
                                },
                                c,
                            ),
                        ),
                    }),
                }),
                e.jsx(me, {
                    header: "数据",
                    footer: "AI 生成的只是起点 —— 这里全都能自己改。",
                    children: e.jsxs("div", {
                        className: "val-form-grid",
                        children: [
                            e.jsxs("label", {
                                children: [
                                    e.jsx("span", { children: "RR" }),
                                    e.jsx(he, {
                                        value: String(l.rr ?? ""),
                                        onChange: (c) => o("rr", Number(c) || 0),
                                        placeholder: "0",
                                    }),
                                ],
                            }),
                            e.jsxs("label", {
                                children: [
                                    e.jsx("span", { children: "等级" }),
                                    e.jsx(he, {
                                        value: String(l.level ?? ""),
                                        onChange: (c) => o("level", Number(c) || 0),
                                        placeholder: "1",
                                    }),
                                ],
                            }),
                            e.jsxs("label", {
                                children: [
                                    e.jsx("span", { children: "胜率" }),
                                    e.jsx(he, {
                                        value: l.winrate,
                                        onChange: (c) => o("winrate", c),
                                        placeholder: "53%",
                                    }),
                                ],
                            }),
                            e.jsxs("label", {
                                children: [
                                    e.jsx("span", { children: "ACS" }),
                                    e.jsx(he, {
                                        value: String(l.acs ?? ""),
                                        onChange: (c) => o("acs", Number(c) || 0),
                                        placeholder: "230",
                                    }),
                                ],
                            }),
                            e.jsxs("label", {
                                children: [
                                    e.jsx("span", { children: "K/D" }),
                                    e.jsx(he, {
                                        value: l.kd,
                                        onChange: (c) => o("kd", c),
                                        placeholder: "1.14",
                                    }),
                                ],
                            }),
                            e.jsxs("label", {
                                children: [
                                    e.jsx("span", { children: "爆头率" }),
                                    e.jsx(he, {
                                        value: l.hs,
                                        onChange: (c) => o("hs", c),
                                        placeholder: "24%",
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                e.jsx(me, {
                    header: "常用英雄",
                    footer: "最多三个。",
                    children: e.jsx("div", {
                        className: "val-chip-wrap",
                        children: Z.map((c) =>
                            e.jsx(
                                "button",
                                {
                                    className: `val-chip${(l.mainAgents || []).includes(c.id) ? " on" : ""}`,
                                    onClick: () => h(c.id),
                                    children: c.zh,
                                },
                                c.id,
                            ),
                        ),
                    }),
                }),
                e.jsx(me, {
                    header: "绑定",
                    footer: "绑定了角色的号只会在那个角色的队伍里出现。选「不绑定」就是通用的。",
                    children: e.jsxs("div", {
                        className: "val-chip-wrap",
                        children: [
                            e.jsx("button", {
                                className: `val-chip${l.charId ? "" : " on"}`,
                                onClick: () => o("charId", null),
                                children: "不绑定",
                            }),
                            i.map((c) =>
                                e.jsx(
                                    "button",
                                    {
                                        className: `val-chip${l.charId === c.id ? " on" : ""}`,
                                        onClick: () => o("charId", c.id),
                                        children: Fe(c),
                                    },
                                    c.id,
                                ),
                            ),
                        ],
                    }),
                }),
                e.jsxs(me, {
                    header: "备注",
                    footer: "这两栏能写长，不会被截。",
                    children: [
                        e.jsxs("div", {
                            className: "val-form-block",
                            children: [
                                e.jsx("label", { children: "打法特点" }),
                                e.jsx(Ke, {
                                    value: l.playstyle,
                                    onChange: (c) => o("playstyle", c),
                                    rows: 2,
                                    placeholder: "擅长什么、怕什么",
                                }),
                            ],
                        }),
                        e.jsxs("div", {
                            className: "val-form-block",
                            children: [
                                e.jsx("label", { children: "这个号的来历" }),
                                e.jsx(Ke, {
                                    value: l.note,
                                    onChange: (c) => o("note", c),
                                    rows: 3,
                                    placeholder: "什么时候开的、为什么开的",
                                }),
                            ],
                        }),
                    ],
                }),
                e.jsxs("button", {
                    className: "val-btn primary wide mt-3",
                    onClick: () => {
                        (a(l), t());
                    },
                    children: [e.jsx(Je, { size: 15 }), "保存"],
                }),
            ],
        }),
    });
}
function Aa({ open: n, accounts: s, onClose: t, onPick: a }) {
    return e.jsx(Me, {
        open: n,
        onClose: t,
        title: "选一个已有的号",
        children: e.jsx("div", {
            className: "px-4 pb-6",
            children:
                s.length === 0
                    ? e.jsxs("div", {
                          className: "val-empty",
                          children: [
                              "还没有打过对局的号。",
                              e.jsx("br", {}),
                              "打完一局之后，用过的号就会留在这里。",
                          ],
                      })
                    : s.map((i) =>
                          e.jsxs(
                              "button",
                              {
                                  className: "val-pick-row",
                                  onClick: () => {
                                      (a(i), t());
                                  },
                                  children: [
                                      e.jsxs("div", {
                                          className: "l",
                                          children: [
                                              e.jsxs("b", {
                                                  children: [
                                                      i.name,
                                                      e.jsxs("span", {
                                                          className: "val-tag",
                                                          children: ["#", i.tag],
                                                      }),
                                                  ],
                                              }),
                                              e.jsxs("i", {
                                                  children: [
                                                      i.rank,
                                                      " · ",
                                                      i.rr,
                                                      "RR · ",
                                                      i.acs,
                                                      " ACS · ",
                                                      i.playedMatches || 0,
                                                      " 局",
                                                  ],
                                              }),
                                          ],
                                      }),
                                      e.jsx(cn, { size: 15 }),
                                  ],
                              },
                              i.id,
                          ),
                      ),
        }),
    });
}
function Sa({ open: n, chars: s, currentId: t, onClose: a, onPick: i }) {
    return e.jsx(Me, {
        open: n,
        onClose: a,
        title: "跟谁一起打",
        children: e.jsx("div", {
            className: "px-4 pb-6",
            children:
                s.length === 0
                    ? e.jsx("div", { className: "val-empty", children: "还没有角色。先去联系人里建一个。" })
                    : s.map((l) =>
                          e.jsxs(
                              "button",
                              {
                                  className: `val-pick-row${l.id === t ? " on" : ""}`,
                                  onClick: () => {
                                      (i(l.id), a());
                                  },
                                  children: [
                                      e.jsxs("div", {
                                          className: "l",
                                          children: [
                                              e.jsx("b", { children: Fe(l) }),
                                              e.jsx("i", {
                                                  children:
                                                      l.signature ||
                                                      (l.persona ? String(l.persona).slice(0, 24) : ""),
                                              }),
                                          ],
                                      }),
                                      l.id === t ? e.jsx(Je, { size: 15 }) : e.jsx(cn, { size: 15 }),
                                  ],
                              },
                              l.id,
                          ),
                      ),
        }),
    });
}
function Ca({ open: n, onClose: s, onCreate: t, busy: a }) {
    const [i, l] = y.useState({ name: "", rank: "", note: "" });
    return (
        y.useEffect(() => {
            n && l({ name: "", rank: "", note: "" });
        }, [n]),
        e.jsx(Rs, {
            open: n,
            onClose: s,
            title: "加一个朋友",
            children: e.jsxs("div", {
                className: "px-4 pb-6",
                children: [
                    e.jsx("div", {
                        className: "val-hint-box",
                        children: "填了的不会被改，空着的 AI 自己补。全空也行 —— 那就整个交给它。",
                    }),
                    e.jsxs(me, {
                        header: "基础信息",
                        children: [
                            e.jsxs("div", {
                                className: "val-form-block",
                                children: [
                                    e.jsx("label", { children: "游戏 ID" }),
                                    e.jsx(Ke, {
                                        value: i.name,
                                        onChange: (r) => l((o) => ({ ...o, name: r })),
                                        rows: 1,
                                        placeholder: "不填就让 AI 取",
                                    }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "val-form-block",
                                children: [
                                    e.jsx("label", { children: "段位" }),
                                    e.jsxs("div", {
                                        className: "val-chip-wrap tight",
                                        children: [
                                            e.jsx("button", {
                                                className: `val-chip${i.rank ? "" : " on"}`,
                                                onClick: () => l((r) => ({ ...r, rank: "" })),
                                                children: "AI 决定",
                                            }),
                                            dn.map((r) =>
                                                e.jsx(
                                                    "button",
                                                    {
                                                        className: `val-chip${(i.rank || "").startsWith(r) ? " on" : ""}`,
                                                        onClick: () => l((o) => ({ ...o, rank: `${r} 2` })),
                                                        children: r,
                                                    },
                                                    r,
                                                ),
                                            ),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "val-form-block",
                                children: [
                                    e.jsx("label", { children: "这人什么样" }),
                                    e.jsx(Ke, {
                                        value: i.note,
                                        onChange: (r) => l((o) => ({ ...o, note: r })),
                                        rows: 3,
                                        placeholder: "身份、打法与性格",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx("button", {
                        className: "val-btn primary wide big",
                        disabled: !!a,
                        onClick: () => t(i),
                        children: a
                            ? e.jsxs(e.Fragment, {
                                  children: [e.jsx(J, { size: 15, className: "spin" }), "生成中"],
                              })
                            : "生成这个朋友",
                    }),
                ],
            }),
        })
    );
}
function wa({ open: n, agent: s, onClose: t, onLock: a }) {
    return s
        ? e.jsx(Me, {
              open: n,
              onClose: t,
              title: s.zh,
              children: e.jsxs("div", {
                  className: "px-4 pb-6",
                  children: [
                      e.jsxs("div", {
                          className: "val-agent-detail",
                          children: [
                              e.jsx("div", { className: "en", children: s.en }),
                              e.jsx("div", { className: "role", children: Oe[s.role] }),
                              e.jsx("div", { className: "kit", children: s.kit }),
                          ],
                      }),
                      e.jsxs("button", {
                          className: "val-btn primary wide big",
                          onClick: () => {
                              (a(s.id), t());
                          },
                          children: ["锁定 ", s.zh],
                      }),
                  ],
              }),
          })
        : null;
}
function Ba({ open: n, map: s, onClose: t }) {
    return s
        ? e.jsx(Me, {
              open: n,
              onClose: t,
              title: `${s.name} · ${s.zh}`,
              children: e.jsxs("div", {
                  className: "px-4 pb-6",
                  children: [
                      e.jsx("div", { className: "val-map-trait", children: s.trait }),
                      e.jsx("div", { className: "val-sec-title", children: "包点" }),
                      e.jsxs("div", {
                          className: "val-narration",
                          children: [s.sites, " 个（", s.sitesLabel, "）"],
                      }),
                      e.jsx("div", { className: "val-sec-title", children: "常用报点" }),
                      e.jsx("div", {
                          className: "val-chip-wrap flat",
                          children: s.callouts.map((a) =>
                              e.jsx("span", { className: "val-chip static", children: a }, a),
                          ),
                      }),
                      e.jsx("div", {
                          className: "val-hint-box",
                          children: "战况里提到的位置都会用这些报点 —— 看不懂的时候回来对一下。",
                      }),
                  ],
              }),
          })
        : null;
}
function Ge({ title: n, players: s, kda: t, rounds: a, mine: i }) {
    const l = (s || [])
        .map((r) => {
            const o = (t == null ? void 0 : t[r.name]) || { k: 0, d: 0, a: 0 };
            return { ...r, ...o, acs: _e(o, a) };
        })
        .sort((r, o) => o.acs - r.acs);
    return e.jsxs("div", {
        className: "val-kda",
        children: [
            e.jsx("div", { className: "val-kda-title", children: n }),
            e.jsxs("div", {
                className: "val-kda-head",
                children: [
                    e.jsx("span", { children: "选手" }),
                    e.jsx("i", { children: "ACS" }),
                    e.jsx("i", { children: "K" }),
                    e.jsx("i", { children: "D" }),
                    e.jsx("i", { children: "A" }),
                ],
            }),
            l.map((r) => {
                var o;
                return e.jsxs(
                    "div",
                    {
                        className: `val-kda-row${r.name === i ? " me" : ""}${r.isChar ? " char" : ""}`,
                        children: [
                            e.jsxs("span", {
                                className: "n",
                                children: [
                                    e.jsx("em", {
                                        children: ((o = _(r.agent)) == null ? void 0 : o.zh) || r.agent,
                                    }),
                                    r.name,
                                    r.isChar && e.jsx("b", { className: "mk char", children: "TA" }),
                                    r.name === i && e.jsx("b", { className: "mk", children: "我" }),
                                ],
                            }),
                            e.jsx("i", { children: r.acs }),
                            e.jsx("i", { children: r.k }),
                            e.jsx("i", { children: r.d }),
                            e.jsx("i", { children: r.a }),
                        ],
                    },
                    r.name,
                );
            }),
        ],
    });
}
const Ma = { party: "房间麦", team: "队伍麦", all: "全体" };
function Ee({ lines: n, meName: s }) {
    return n.length
        ? e.jsx("div", {
              className: "val-voicecard",
              children: n.map((t, a) =>
                  e.jsxs(
                      "div",
                      {
                          className: `val-voiceline${t.isMe ? " me" : ""}${t.isChar ? " char" : ""}`,
                          children: [
                              e.jsxs("div", {
                                  className: "hd",
                                  children: [
                                      e.jsx("b", { children: t.name }),
                                      e.jsx("em", {
                                          className: `ch ${t.channel}`,
                                          children: Ma[t.channel] || t.channel,
                                      }),
                                  ],
                              }),
                              e.jsx("div", { className: "tx", children: t.text }),
                          ],
                      },
                      a,
                  ),
              ),
          })
        : null;
}
function za({
    channel: n,
    setChannel: s,
    onSend: t,
    busy: a,
    partyNames: i,
    roundNo: l,
    phase: r,
    setPhase: o,
}) {
    const [h, c] = y.useState(""),
        x = Number(l) > 1,
        p = x ? r : "pre",
        m = p === "post" ? { round: Number(l) - 1, phase: "post" } : { round: Number(l), phase: "pre" },
        d = () => {
            const j = h.trim();
            !j || a || (c(""), t(j, n, m));
        };
    return e.jsxs("div", {
        className: "val-voicebar",
        children: [
            x &&
                e.jsxs("div", {
                    className: "val-voicebar-when",
                    children: [
                        e.jsxs("button", {
                            className: p === "pre" ? "on" : "",
                            onClick: () => o("pre"),
                            children: ["第 ", l, " 回合 · 局前"],
                        }),
                        e.jsxs("button", {
                            className: p === "post" ? "on" : "",
                            onClick: () => o("post"),
                            children: ["第 ", Number(l) - 1, " 回合 · 打完之后"],
                        }),
                    ],
                }),
            e.jsx("div", {
                className: "val-voicebar-ch",
                children: Qn.map((j) =>
                    e.jsx(
                        "button",
                        { className: n === j.id ? "on" : "", onClick: () => s(j.id), children: j.label },
                        j.id,
                    ),
                ),
            }),
            e.jsxs("div", {
                className: "val-voicebar-in",
                children: [
                    e.jsx("input", {
                        value: h,
                        onChange: (j) => c(j.target.value),
                        onKeyDown: (j) => {
                            j.key === "Enter" && d();
                        },
                        placeholder:
                            n === "party"
                                ? `只有 ${i.join("、") || "你"} 听得见`
                                : n === "team"
                                  ? "跟队友说…"
                                  : "全体频道…",
                    }),
                    e.jsx("button", {
                        className: "val-icon-btn send",
                        disabled: !h.trim() || a,
                        onClick: d,
                        children: a ? e.jsx(J, { size: 15, className: "spin" }) : e.jsx(tn, { size: 15 }),
                    }),
                ],
            }),
        ],
    });
}
function La({ plan: n, busy: s, onChoose: t }) {
    const [a, i] = y.useState(""),
        [l, r] = y.useState(!1),
        o = () => {
            const h = a.trim();
            !h || s || (i(""), r(!1), t({ id: "custom", label: h, custom: !0 }));
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("div", {
                className: "val-options",
                children: ((n == null ? void 0 : n.options) || []).map((h, c) =>
                    e.jsxs(
                        "button",
                        {
                            className: "val-option",
                            disabled: s,
                            onClick: () => t(h),
                            children: [
                                e.jsx("b", { children: h.label }),
                                h.detail && e.jsx("i", { children: h.detail }),
                            ],
                        },
                        h.id || c,
                    ),
                ),
            }),
            l
                ? e.jsxs("div", {
                      className: "val-custom",
                      children: [
                          e.jsx("textarea", {
                              value: a,
                              onChange: (h) => i(h.target.value),
                              placeholder: "这一回合我想怎么打 —— 想法离谱的话它会真的失败",
                              rows: 2,
                              autoFocus: !0,
                          }),
                          e.jsxs("div", {
                              className: "val-custom-foot",
                              children: [
                                  e.jsx("button", {
                                      className: "val-btn",
                                      onClick: () => {
                                          (r(!1), i(""));
                                      },
                                      children: "取消",
                                  }),
                                  e.jsx("button", {
                                      className: "val-btn primary",
                                      disabled: !a.trim() || s,
                                      onClick: o,
                                      children: "就这么打",
                                  }),
                              ],
                          }),
                      ],
                  })
                : e.jsxs("button", {
                      className: "val-custom-open",
                      disabled: s,
                      onClick: () => r(!0),
                      children: [e.jsx(on, { size: 13 }), "自己写一个打法"],
                  }),
        ],
    });
}
function Pa({ entry: n, charName: s }) {
    return n
        ? e.jsxs("div", {
              className: "val-feed",
              children: [
                  e.jsxs("div", {
                      className: "val-feed-head",
                      children: [
                          e.jsx("span", {
                              className: `rr ${n.win ? "w" : "l"}`,
                              children: n.win ? "拿下" : "丢了",
                          }),
                          "第 ",
                          n.round,
                          " 回合 · ",
                          n.chosenLabel,
                          n.custom && e.jsx("em", { className: "val-custom-mark", children: "自定义" }),
                      ],
                  }),
                  e.jsx("div", { className: "val-narration", children: n.narration }),
                  !!n.firstBlood &&
                      e.jsxs("div", { className: "val-tagline", children: ["首杀 · ", n.firstBlood] }),
                  !!n.clutch && e.jsxs("div", { className: "val-tagline", children: ["残局 · ", n.clutch] }),
                  !!n.charMoment &&
                      e.jsxs("div", {
                          className: "val-char-moment",
                          children: [
                              e.jsxs("div", { className: "h", children: [e.jsx(Os, { size: 11 }), s] }),
                              e.jsx("div", { className: "b", children: n.charMoment }),
                          ],
                      }),
              ],
          })
        : null;
}
function Ia({ open: n, match: s, onClose: t, charName: a }) {
    var l, r, o, h;
    if (!s) return null;
    const i = s.rounds || 1;
    return e.jsx(Me, {
        open: n,
        onClose: t,
        title: `${((l = oe(s.map)) == null ? void 0 : l.name) || s.map} · ${s.result === "win" ? "胜" : "负"}`,
        children: e.jsxs("div", {
            className: "px-4 pb-6",
            children: [
                e.jsxs("div", {
                    className: `val-result ${s.result}`,
                    children: [
                        e.jsxs("div", { className: "sc", children: [s.score.ally, " : ", s.score.enemy] }),
                        e.jsxs("div", {
                            className: "mp",
                            children: [
                                (r = _(s.myAgent)) == null ? void 0 : r.zh,
                                " · ",
                                s.myKda.k,
                                "/",
                                s.myKda.d,
                                "/",
                                s.myKda.a,
                                " · +",
                                s.points,
                                " 分",
                            ],
                        }),
                    ],
                }),
                e.jsxs("div", {
                    className: "val-kda-wrap",
                    children: [
                        e.jsx(Ge, {
                            title: "我方",
                            players: (o = s.roster) == null ? void 0 : o.ally,
                            kda: s.kda,
                            rounds: i,
                            mine: s.myName,
                        }),
                        e.jsx(Ge, {
                            title: "对面",
                            players: (h = s.roster) == null ? void 0 : h.enemy,
                            kda: s.kda,
                            rounds: i,
                        }),
                    ],
                }),
                !!(s.charMoments || []).length &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs("div", { className: "val-sec-title", children: [a, " 在这局里"] }),
                            s.charMoments.map((c, x) =>
                                e.jsx(
                                    "div",
                                    {
                                        className: "val-char-moment flat",
                                        children: e.jsx("div", { className: "b", children: c }),
                                    },
                                    x,
                                ),
                            ),
                        ],
                    }),
                !!(s.postLines || []).length &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx("div", { className: "val-sec-title", children: "赛后他说" }),
                            s.postLines.map((c, x) =>
                                e.jsx("div", { className: "val-post-line", children: c }, x),
                            ),
                        ],
                    }),
                !!s.memoryLine &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx("div", { className: "val-sec-title", children: "写进记忆的" }),
                            e.jsx("div", { className: "val-narration dim", children: s.memoryLine }),
                        ],
                    }),
            ],
        }),
    });
}
const Ra = {
        enter: (n) => ({ x: n > 0 ? "100%" : "-26%", opacity: n > 0 ? 1 : 0.55 }),
        center: { x: 0, opacity: 1 },
        exit: (n) => ({ x: n > 0 ? "-26%" : "100%", opacity: n > 0 ? 0.55 : 1 }),
    },
    Va = { type: "tween", duration: 0.34, ease: [0.32, 0.72, 0, 1] };
function Ue({ title: n, sub: s, onBack: t, backLabel: a, right: i }) {
    return e.jsxs("div", {
        className: "val-page-head",
        children: [
            e.jsxs("div", {
                className: "val-head-top",
                children: [
                    t &&
                        e.jsxs("button", {
                            className: "val-back",
                            onClick: t,
                            children: [e.jsx(_s, { size: 18 }), a || ""],
                        }),
                    i && e.jsx("div", { className: "val-page-right", children: i }),
                ],
            }),
            e.jsxs("div", {
                className: "val-head-title",
                children: [e.jsx("b", { children: n }), s && e.jsx("i", { children: s })],
            }),
        ],
    });
}
function Ta(n) {
    var Ae;
    const {
        charName: s,
        meName: t,
        val: a,
        myAcct: i,
        charAcct: l,
        friendAccts: r,
        partyNames: o,
        realAccounts: h,
        lobbyTab: c,
        setLobbyTab: x,
        busy: p,
        genAccount: m,
        valPatch: d,
        valRemoveAccount: j,
        setEditing: $,
        setPicking: z,
        setDetail: D,
        lobbyChat: K,
        lobbyText: P,
        setLobbyText: te,
        sendLobby: ie,
        onStart: E,
        onBack: F,
        state: T,
        genParty: ue,
        onSwitchChar: q,
        onAddFriend: k,
        vaultGroups: I,
        live: O,
        onResume: ve,
        onDropLive: H,
        inviteStatus: B,
        inviteReason: ze,
        sendInvite: Le,
        party: ge,
        server: Pe,
        serverMeta: Ye,
        switchServer: Ie,
    } = n;
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(Ue, {
                title: "组队大厅",
                sub: `跟 ${s} 打 · ${o.length || 1} 人`,
                onBack: F,
                right: e.jsxs("button", {
                    className: "val-charswitch",
                    onClick: q,
                    children: [e.jsx("span", { children: s }), e.jsx(cn, { size: 12 })],
                }),
            }),
            e.jsx("div", {
                className: "val-tabbar",
                children: e.jsx(ns, {
                    items: [
                        ["party", "队伍"],
                        ["vault", "账号库"],
                        ["history", "战绩"],
                        ["settings", "设置"],
                    ],
                    value: c,
                    onChange: x,
                }),
            }),
            e.jsxs("div", {
                className: "val-body",
                children: [
                    c === "party" &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsxs("div", {
                                    className: "val-sec-title",
                                    children: [
                                        "大区",
                                        e.jsx("span", {
                                            className: "val-sec-note",
                                            children: O ? "对局中不能切" : `麦里默认说${Ye.lang}`,
                                        }),
                                    ],
                                }),
                                e.jsx("div", {
                                    className: "val-server-seg",
                                    children: $e.map((v) =>
                                        e.jsx(
                                            "button",
                                            {
                                                className: `val-chip${v.id === Pe ? " on" : ""}`,
                                                disabled: !!O,
                                                onClick: () => Ie(v.id),
                                                children: v.label,
                                            },
                                            v.id,
                                        ),
                                    ),
                                }),
                                e.jsxs("button", {
                                    className: "val-oneshot",
                                    disabled: !!p,
                                    onClick: () => ue(""),
                                    children: [
                                        p === "acct:all"
                                            ? e.jsx(J, { size: 14, className: "spin" })
                                            : e.jsx(Vs, { size: 14 }),
                                        "一次生成整队（省调用）",
                                    ],
                                }),
                                e.jsx(an, {
                                    acct: i,
                                    label: "我",
                                    sub: "填自己的账号资料，或者让 AI 生成一个",
                                    busy: p === "acct:me",
                                    onGen: () => m("me", "me", "", t),
                                    onEdit: () => $(i),
                                    onPick: () => z("me"),
                                }),
                                B === "accepted" && l
                                    ? e.jsx(an, {
                                          acct: l,
                                          label: s,
                                          accent: !0,
                                          sub: "",
                                          busy: p === "acct:char",
                                          onGen: () => m("char", "char", "", s),
                                          onEdit: () => $(l),
                                          onPick: () => z("char"),
                                          onRemove: () => {
                                              d({ invite: null, party: { ...ge, char: null } });
                                          },
                                      })
                                    : e.jsxs("div", {
                                          className: `val-invite${B === "declined" ? " declined" : ""}${B === "pending" ? " pending" : ""}`,
                                          children: [
                                              e.jsx("div", { className: "val-invite-name", children: s }),
                                              e.jsx("div", {
                                                  className: "val-invite-sub",
                                                  children:
                                                      B === "pending"
                                                          ? "邀请已经发过去了，等他回…"
                                                          : B === "declined"
                                                            ? ze || "他这次没答应"
                                                            : "在聊天里给他发一张组队邀请 —— 接不接他自己决定",
                                              }),
                                              e.jsx("button", {
                                                  className: "val-btn primary",
                                                  disabled: !!p || !i,
                                                  onClick: Le,
                                                  children:
                                                      p === "invite"
                                                          ? e.jsxs(e.Fragment, {
                                                                children: [
                                                                    e.jsx(J, { size: 14, className: "spin" }),
                                                                    "发送中",
                                                                ],
                                                            })
                                                          : B === "declined"
                                                            ? "再问一次"
                                                            : e.jsxs(e.Fragment, {
                                                                  children: [
                                                                      e.jsx(tn, { size: 14 }),
                                                                      "发邀请",
                                                                  ],
                                                              }),
                                              }),
                                              B === "declined" &&
                                                  e.jsx("button", {
                                                      className: "val-btn ghost",
                                                      onClick: () => d({ invite: null }),
                                                      children: "不叫他了，自己打",
                                                  }),
                                          ],
                                      }),
                                r.map((v, L) =>
                                    e.jsx(
                                        an,
                                        {
                                            acct: v,
                                            label: `朋友 ${L + 1}`,
                                            sub: "",
                                            busy: p === `acct:f${L}`,
                                            onGen: () => m("friend", `f${L}`, "", v.name),
                                            onEdit: () => $(v),
                                            onPick: () => z(L),
                                            onRemove: () =>
                                                d((de) => ({
                                                    party: {
                                                        ...de.party,
                                                        friends: (de.party.friends || []).filter(
                                                            (Re) => Re !== v.id,
                                                        ),
                                                    },
                                                })),
                                        },
                                        v.id,
                                    ),
                                ),
                                r.length < 3 &&
                                    e.jsxs("button", {
                                        className: "val-add-friend",
                                        disabled: !!p,
                                        onClick: k,
                                        children: [e.jsx(Jn, { size: 14 }), "加一个朋友（可以先填你知道的）"],
                                    }),
                                e.jsxs("div", {
                                    className: "val-sec-title",
                                    children: [
                                        "房间麦",
                                        e.jsxs("span", {
                                            className: "val-sec-note",
                                            children: ["只有 ", o.join("、") || "你", " 听得见"],
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "val-lobby-chat",
                                    children: [
                                        e.jsx("div", {
                                            className: "val-lobby-log",
                                            children:
                                                K.length === 0
                                                    ? e.jsxs("div", {
                                                          className: "val-voice-empty",
                                                          children: [
                                                              "在这儿跟 ",
                                                              s,
                                                              " 说话。",
                                                              e.jsx("br", {}),
                                                              "「你开个小号陪我嘛」这种要求他会自己判断要不要答应。",
                                                          ],
                                                      })
                                                    : K.map((v, L) =>
                                                          e.jsx(
                                                              "div",
                                                              {
                                                                  className: `val-lobby-line ${v.who}`,
                                                                  children: e.jsx("span", {
                                                                      children: v.text,
                                                                  }),
                                                              },
                                                              L,
                                                          ),
                                                      ),
                                        }),
                                        e.jsxs("div", {
                                            className: "val-voice-input",
                                            children: [
                                                e.jsx("input", {
                                                    value: P,
                                                    onChange: (v) => te(v.target.value),
                                                    onKeyDown: (v) => {
                                                        v.key === "Enter" && ie();
                                                    },
                                                    placeholder: `跟 ${s} 说点什么…`,
                                                }),
                                                e.jsx("button", {
                                                    className: "val-icon-btn send",
                                                    disabled: !P.trim() || !!p,
                                                    onClick: ie,
                                                    children:
                                                        p === "lobby"
                                                            ? e.jsx(J, { size: 15, className: "spin" })
                                                            : e.jsx(tn, { size: 15 }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    c === "vault" &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsxs("div", {
                                    className: "val-hint-box",
                                    children: [
                                        "打过对局的号会标成「已存在」—— 下次可以直接选它，也可以改或者删。",
                                        e.jsx("br", {}),
                                        "号可以**绑定到某个角色**：绑定了就只在那个角色的队伍里出现，不绑定的是通用的。",
                                    ],
                                }),
                                a.accounts.length === 0 &&
                                    e.jsx("div", { className: "val-empty", children: "还没有任何账号。" }),
                                I.map((v) =>
                                    e.jsxs(
                                        Kn.Fragment,
                                        {
                                            children: [
                                                e.jsxs("div", {
                                                    className: "val-sec-title",
                                                    children: [
                                                        v.label,
                                                        e.jsxs("span", {
                                                            className: "val-sec-note",
                                                            children: [v.items.length, " 个"],
                                                        }),
                                                    ],
                                                }),
                                                v.items.map((L) =>
                                                    e.jsxs(
                                                        "div",
                                                        {
                                                            className: "val-vault-row",
                                                            children: [
                                                                e.jsxs("div", {
                                                                    className: "l",
                                                                    onClick: () => $(L),
                                                                    children: [
                                                                        e.jsxs("b", {
                                                                            children: [
                                                                                L.name,
                                                                                e.jsxs("span", {
                                                                                    className: "val-tag",
                                                                                    children: ["#", L.tag],
                                                                                }),
                                                                                L.real &&
                                                                                    e.jsx("span", {
                                                                                        className: "val-real",
                                                                                        children: "已存在",
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                        e.jsxs("i", {
                                                                            children: [
                                                                                L.owner === "char"
                                                                                    ? "角色"
                                                                                    : L.owner === "me"
                                                                                      ? "我"
                                                                                      : "朋友",
                                                                                " · ",
                                                                                L.rank,
                                                                                " · ",
                                                                                L.rr,
                                                                                "RR · ",
                                                                                L.playedMatches || 0,
                                                                                " 局",
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                                e.jsx("button", {
                                                                    className: "val-icon-btn",
                                                                    onClick: () => $(L),
                                                                    children: e.jsx(on, { size: 14 }),
                                                                }),
                                                                e.jsx("button", {
                                                                    className: "val-icon-btn",
                                                                    onClick: () => j(L.id),
                                                                    children: e.jsx(Hn, { size: 14 }),
                                                                }),
                                                            ],
                                                        },
                                                        L.id,
                                                    ),
                                                ),
                                            ],
                                        },
                                        v.key,
                                    ),
                                ),
                            ],
                        }),
                    c === "history" &&
                        e.jsxs(e.Fragment, {
                            children: [
                                (a.matches || []).length === 0 &&
                                    e.jsx("div", { className: "val-empty", children: "还没打过。" }),
                                (a.matches || [])
                                    .slice()
                                    .reverse()
                                    .map((v) => {
                                        var L, de;
                                        return e.jsxs(
                                            "button",
                                            {
                                                className: "val-hist-card",
                                                onClick: () => D(v),
                                                children: [
                                                    e.jsx("div", {
                                                        className: `res ${v.result}`,
                                                        children: v.result === "win" ? "胜" : "负",
                                                    }),
                                                    e.jsxs("div", {
                                                        className: "mid",
                                                        children: [
                                                            e.jsxs("b", {
                                                                children: [
                                                                    ((L = oe(v.map)) == null
                                                                        ? void 0
                                                                        : L.name) || v.map,
                                                                    e.jsxs("span", {
                                                                        children: [
                                                                            v.score.ally,
                                                                            ":",
                                                                            v.score.enemy,
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            e.jsxs("i", {
                                                                children: [
                                                                    (de = _(v.myAgent)) == null
                                                                        ? void 0
                                                                        : de.zh,
                                                                    " · ",
                                                                    v.myKda.k,
                                                                    "/",
                                                                    v.myKda.d,
                                                                    "/",
                                                                    v.myKda.a,
                                                                    v.rr
                                                                        ? ` · ${v.rr.delta >= 0 ? "+" : ""}${v.rr.delta}RR`
                                                                        : "",
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsxs("div", {
                                                        className: "pt",
                                                        children: ["+", v.points],
                                                    }),
                                                ],
                                            },
                                            v.id,
                                        );
                                    }),
                            ],
                        }),
                    c === "settings" &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx("div", { className: "val-sec-title", children: "记忆" }),
                                e.jsxs("div", {
                                    className: "val-hint-box",
                                    children: [
                                        "每打完一局都写一条记忆，会把聊天的记忆刷屏。设成 3 就是每 3 把汇总成一条。",
                                        (a.pending || []).length > 0 &&
                                            e.jsxs(e.Fragment, {
                                                children: [
                                                    e.jsx("br", {}),
                                                    "现在攒了 ",
                                                    (a.pending || []).length,
                                                    " 把还没归档。",
                                                ],
                                            }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "val-setting-row",
                                    children: [
                                        e.jsx("span", { children: "几把游戏算一次记忆" }),
                                        e.jsx("div", {
                                            className: "val-chip-wrap tight",
                                            children: [1, 2, 3, 5, 10].map((v) =>
                                                e.jsxs(
                                                    "button",
                                                    {
                                                        className: `val-chip${(a.memoryEvery || 1) === v ? " on" : ""}`,
                                                        onClick: () => d({ memoryEvery: v }),
                                                        children: [v, " 把"],
                                                    },
                                                    v,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                                e.jsx("div", { className: "val-sec-title", children: "调用" }),
                                e.jsxs("div", {
                                    className: "val-hint-box",
                                    children: [
                                        "次卡计费的话，**调用次数比 token 更贵**。这里的默认值已经按「少调用多输出」调过了：",
                                        e.jsx("br", {}),
                                        "一个回合选选项是",
                                        e.jsx("b", { children: "本地结算" }),
                                        "（蓝图里已经写好了，零调用），只有一批打完才会去排下一批。",
                                        e.jsx("br", {}),
                                        "一局大致：开局 2 次（选人 + 蓝图）＋ 续批 ",
                                        Math.max(1, Math.ceil(24 / (a.batchRounds || 8))),
                                        "—3 次 ＋ 赛后 1 次。 在麦里说话和自己写打法各算一次（那是你主动要的）。",
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "val-setting-row",
                                    children: [
                                        e.jsx("span", { children: "一次预排几个回合" }),
                                        e.jsx("div", {
                                            className: "val-chip-wrap tight",
                                            children: [4, 6, 8, 12].map((v) =>
                                                e.jsxs(
                                                    "button",
                                                    {
                                                        className: `val-chip${(a.batchRounds || 8) === v ? " on" : ""}`,
                                                        onClick: () => d({ batchRounds: v }),
                                                        children: [v, " 回合"],
                                                    },
                                                    v,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "val-setting-row",
                                    children: [
                                        e.jsx("span", { children: "单次输出上限 token" }),
                                        e.jsx("div", {
                                            className: "val-chip-wrap tight",
                                            children: [8e3, 16e3, 32e3, 64e3].map((v) =>
                                                e.jsxs(
                                                    "button",
                                                    {
                                                        className: `val-chip${(a.maxTokens || 16e3) === v ? " on" : ""}`,
                                                        onClick: () => d({ maxTokens: v }),
                                                        children: [v / 1e3, "k"],
                                                    },
                                                    v,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                                e.jsx("div", {
                                    className: "val-hint-box",
                                    children:
                                        "预排得越多，整局调用越少；但单次输出也越长，模型可能写不完就被截断。 截断会导致这一批排不出来 —— 那就把 token 上限调高，或者把回合数调小。",
                                }),
                                e.jsx("div", { className: "val-sec-title", children: "接口" }),
                                e.jsxs("div", {
                                    className: "val-hint-box",
                                    children: [
                                        "对局模拟有专用通道 —— 抽屉 → API 设置 → 「对局」那一页。留空就走聊天通道。",
                                        e.jsx("br", {}),
                                        "当前：",
                                        (Ae = T.api.valorant) != null && Ae.baseUrl
                                            ? `已配置（${T.api.valorant.model || "未填 model"}）`
                                            : "未配置，走聊天通道",
                                    ],
                                }),
                                e.jsx("div", { className: "val-sec-title", children: "累计" }),
                                e.jsxs("div", {
                                    className: "val-points-list",
                                    children: [
                                        e.jsxs("div", {
                                            className: "val-point-row",
                                            children: [
                                                e.jsx("span", { children: "总积分" }),
                                                e.jsx("b", { children: a.points || 0 }),
                                            ],
                                        }),
                                        e.jsxs("div", {
                                            className: "val-point-row",
                                            children: [
                                                e.jsx("span", { children: "打过的局" }),
                                                e.jsx("b", { children: (a.matches || []).length }),
                                            ],
                                        }),
                                        e.jsxs("div", {
                                            className: "val-point-row",
                                            children: [
                                                e.jsx("span", { children: "胜场" }),
                                                e.jsx("b", {
                                                    children: (a.matches || []).filter(
                                                        (v) => v.result === "win",
                                                    ).length,
                                                }),
                                            ],
                                        }),
                                        e.jsxs("div", {
                                            className: "val-point-row",
                                            children: [
                                                e.jsx("span", { children: "存在的号" }),
                                                e.jsx("b", { children: h.length }),
                                            ],
                                        }),
                                        e.jsxs("div", {
                                            className: "val-point-row",
                                            children: [
                                                e.jsx("span", { children: "累计 API 调用" }),
                                                e.jsx("b", { children: a.calls || 0 }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
            c === "party" &&
                e.jsx("div", {
                    className: "val-footbar",
                    children: O
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  e.jsxs("button", {
                                      className: "val-btn primary wide big flat",
                                      onClick: ve,
                                      children: [
                                          e.jsx(In, { size: 16 }),
                                          "继续上一局（",
                                          O.score.ally,
                                          ":",
                                          O.score.enemy,
                                          "）",
                                      ],
                                  }),
                                  e.jsx("button", {
                                      className: "val-btn ghost wide",
                                      style: { marginTop: 8 },
                                      onClick: H,
                                      children: "不要了，重新开一局",
                                  }),
                              ],
                          })
                        : e.jsxs("button", {
                              className: "val-btn primary wide big flat",
                              disabled: !i || !!p || B === "pending",
                              onClick: E,
                              children: [
                                  e.jsx(In, { size: 16 }),
                                  B === "pending" ? `等 ${s} 回应…` : "开始匹配",
                              ],
                          }),
                }),
        ],
    });
}
function Da({ map: n, onDone: s, onCancel: t }) {
    const [a, i] = y.useState(0);
    return (
        y.useEffect(() => {
            const l = setTimeout(() => i(1), 1600),
                r = setTimeout(() => i(2), 2500),
                o = setTimeout(() => s(), 4200);
            return () => {
                (clearTimeout(l), clearTimeout(r), clearTimeout(o));
            };
        }, [s]),
        e.jsxs("div", {
            className: "val-matching",
            children: [
                e.jsxs(Gn, {
                    mode: "wait",
                    children: [
                        a === 0 &&
                            e.jsxs(
                                re.div,
                                {
                                    className: "m-inner",
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: { opacity: 0, y: -8 },
                                    children: [
                                        e.jsx("div", { className: "m-ring", children: e.jsx("span", {}) }),
                                        e.jsx("div", { className: "m-t", children: "正在匹配" }),
                                        e.jsx("div", { className: "m-s", children: "竞技模式 · 5v5" }),
                                    ],
                                },
                                "s0",
                            ),
                        a === 1 &&
                            e.jsxs(
                                re.div,
                                {
                                    className: "m-inner",
                                    initial: { opacity: 0, scale: 0.94 },
                                    animate: { opacity: 1, scale: 1 },
                                    exit: { opacity: 0 },
                                    children: [
                                        e.jsx("div", {
                                            className: "m-found",
                                            children: e.jsx(Je, { size: 26 }),
                                        }),
                                        e.jsx("div", { className: "m-t", children: "找到对局" }),
                                    ],
                                },
                                "s1",
                            ),
                        a === 2 &&
                            e.jsxs(
                                re.div,
                                {
                                    className: "m-inner",
                                    initial: { opacity: 0, y: 14 },
                                    animate: { opacity: 1, y: 0 },
                                    exit: { opacity: 0 },
                                    children: [
                                        e.jsx("div", { className: "m-s", children: "本局地图" }),
                                        e.jsx("div", {
                                            className: "m-map",
                                            children: n == null ? void 0 : n.name,
                                        }),
                                        e.jsx("div", {
                                            className: "m-mapzh",
                                            children: n == null ? void 0 : n.zh,
                                        }),
                                        e.jsx("div", {
                                            className: "m-trait",
                                            children: n == null ? void 0 : n.trait,
                                        }),
                                    ],
                                },
                                "s2",
                            ),
                    ],
                }),
                a < 2 &&
                    e.jsx("button", {
                        className: "val-btn ghost m-cancel",
                        onClick: t,
                        children: "取消匹配",
                    }),
            ],
        })
    );
}
function Ea(n) {
    var q;
    const {
            map: s,
            myAcct: t,
            charAcct: a,
            friendAccts: i,
            charName: l,
            myAgent: r,
            setMyAgent: o,
            picks: h,
            selectVoice: c,
            vibe: x,
            loadingPicks: p,
            busy: m,
            onLock: d,
            onQuit: j,
            setAgentPeek: $,
            setMapPeek: z,
        } = n,
        [D, K] = y.useState(En),
        [P, te] = y.useState("party");
    (y.useEffect(() => {
        const k = setInterval(() => K((I) => (I > 0 ? I - 1 : 0)), 1e3);
        return () => clearInterval(k);
    }, []),
        y.useEffect(() => {
            var k;
            D === 0 && !m && d(r || ((k = Yn(Z)) == null ? void 0 : k.id));
        }, [D]));
    const E = [
        ...[t, a, ...i]
            .filter(Boolean)
            .map((k) => ({
                name: k.name,
                agent: k.id === (t == null ? void 0 : t.id) ? r : (k.mainAgents || [])[0] || "",
                isMe: k.id === (t == null ? void 0 : t.id),
                isChar: k.id === (a == null ? void 0 : a.id),
                locked: k.id === (t == null ? void 0 : t.id) ? !!r : !0,
            })),
        ...(h || []).map((k) => ({ name: k.name, agent: k.agent, note: k.note, locked: !0, stranger: !0 })),
    ].slice(0, 5);
    for (; E.length < 5; ) E.push({ empty: !0, key: `e${E.length}` });
    const F = new Set(E.map((k) => k.agent).filter(Boolean)),
        T = qn(E.map((k) => k.agent).filter(Boolean)),
        ue = (c || []).filter((k) => k.channel === P);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(Ue, {
                title: "选择英雄",
                sub: `${s == null ? void 0 : s.name} · ${s == null ? void 0 : s.zh}`,
                onBack: j,
                backLabel: "退出",
                right: e.jsxs("span", {
                    className: `val-count${D <= 15 ? " warn" : ""}`,
                    children: [
                        String(Math.floor(D / 60)).padStart(1, "0"),
                        ":",
                        String(D % 60).padStart(2, "0"),
                    ],
                }),
            }),
            e.jsx("div", {
                className: "val-count-bar",
                children: e.jsx("span", { style: { width: `${(D / En) * 100}%` } }),
            }),
            e.jsx("div", {
                className: "val-slots",
                children: E.map((k, I) => {
                    var O;
                    return e.jsx(
                        "div",
                        {
                            className: `val-slot-card${k.isMe ? " me" : ""}${k.isChar ? " char" : ""}${k.empty ? " empty" : ""}${k.locked ? " locked" : ""}`,
                            children: k.empty
                                ? e.jsx("span", {
                                      className: "dots",
                                      children: p ? e.jsx(J, { size: 13, className: "spin" }) : "—",
                                  })
                                : e.jsxs(e.Fragment, {
                                      children: [
                                          e.jsx("b", {
                                              children:
                                                  ((O = _(k.agent)) == null ? void 0 : O.zh) || "选择中",
                                          }),
                                          e.jsx("i", { children: k.isMe ? "我" : k.isChar ? l : k.name }),
                                          k.locked &&
                                              e.jsx("em", {
                                                  className: "lk",
                                                  children: e.jsx(Je, { size: 10 }),
                                              }),
                                      ],
                                  }),
                        },
                        k.key || k.name || I,
                    );
                }),
            }),
            e.jsxs("div", {
                className: "val-body agent",
                children: [
                    e.jsxs("div", {
                        className: "val-select-row",
                        children: [
                            e.jsxs("button", {
                                className: "val-chip static",
                                onClick: () => z(s),
                                children: [e.jsx(ln, { size: 11 }), " 报点"],
                            }),
                            T.length > 0
                                ? e.jsxs("span", {
                                      className: "val-gap",
                                      children: ["阵容还缺：", T.map((k) => Oe[k].split(" ")[0]).join("、")],
                                  })
                                : e.jsx("span", { className: "val-gap ok", children: "阵容齐了" }),
                        ],
                    }),
                    x && e.jsx("div", { className: "val-vibe", children: x }),
                    ya.map((k) =>
                        e.jsxs(
                            "div",
                            {
                                className: "val-agent-group",
                                children: [
                                    e.jsx("div", { className: "val-sec-title sm", children: Oe[k] }),
                                    e.jsx("div", {
                                        className: "val-agent-grid",
                                        children: Wn(k).map((I) => {
                                            const O = F.has(I.id) && r !== I.id;
                                            return e.jsxs(
                                                "button",
                                                {
                                                    className: `val-agent${r === I.id ? " on" : ""}${O ? " used" : ""}`,
                                                    disabled: O,
                                                    onClick: () => o(I.id),
                                                    children: [
                                                        e.jsx("b", { children: I.zh }),
                                                        e.jsx("i", { children: O ? "队友已选" : I.kit }),
                                                        e.jsx("em", {
                                                            className: "peek",
                                                            onClick: (ve) => {
                                                                (ve.stopPropagation(), $(I));
                                                            },
                                                            children: e.jsx(ln, { size: 11 }),
                                                        }),
                                                    ],
                                                },
                                                I.id,
                                            );
                                        }),
                                    }),
                                ],
                            },
                            k,
                        ),
                    ),
                    e.jsx("div", { className: "val-sec-title", children: "选人阶段的麦" }),
                    e.jsxs("div", {
                        className: "val-voice compact",
                        children: [
                            e.jsx("div", {
                                className: "val-voice-tabs",
                                children: Qn.map((k) =>
                                    e.jsxs(
                                        "button",
                                        {
                                            className: `t${P === k.id ? " on" : ""}`,
                                            onClick: () => te(k.id),
                                            children: [
                                                k.label,
                                                e.jsx("span", {
                                                    children: (c || []).filter((I) => I.channel === k.id)
                                                        .length,
                                                }),
                                            ],
                                        },
                                        k.id,
                                    ),
                                ),
                            }),
                            e.jsxs("div", {
                                className: "val-voice-log",
                                children: [
                                    p &&
                                        e.jsxs("div", {
                                            className: "val-voice-empty",
                                            children: [
                                                e.jsx(J, { size: 13, className: "spin" }),
                                                " 队友正在选…",
                                            ],
                                        }),
                                    !p &&
                                        ue.length === 0 &&
                                        e.jsx("div", {
                                            className: "val-voice-empty",
                                            children: "这个频道没人说话",
                                        }),
                                    ue.map((k, I) =>
                                        e.jsxs(
                                            "div",
                                            {
                                                className: `val-voice-line${k.isChar ? " char" : ""}`,
                                                children: [
                                                    e.jsx("b", { children: k.name }),
                                                    e.jsx("span", { children: k.text }),
                                                ],
                                            },
                                            I,
                                        ),
                                    ),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx("div", {
                className: "val-footbar",
                children: e.jsx("button", {
                    className: "val-btn primary wide big flat",
                    disabled: !r || !!m,
                    onClick: () => d(r),
                    children:
                        m === "plan"
                            ? e.jsxs(e.Fragment, {
                                  children: [e.jsx(J, { size: 16, className: "spin" }), "进入对局…"],
                              })
                            : r
                              ? e.jsxs(e.Fragment, {
                                    children: ["锁定 ", (q = _(r)) == null ? void 0 : q.zh],
                                })
                              : "选一个英雄",
                }),
            }),
        ],
    });
}
function Fa(n) {
    const {
            live: s,
            charName: t,
            matchTab: a,
            setMatchTab: i,
            channel: l,
            setChannel: r,
            currentPlan: o,
            busy: h,
            chooseOption: c,
            sendVoice: x,
            partyNames: p,
            setMapPeek: m,
            onAbandon: d,
            onContinue: j,
            onLeave: $,
            voicePhase: z,
            setVoicePhase: D,
        } = n,
        K = Zn(s.startSide, s.roundNo),
        P = oe(s.map),
        te = s.saidLog || [],
        ie = (F, T, ue) => te.filter((q) => Number(q.round) === Number(F) && (q.phase || ue) === T),
        E = te.filter((F) => !F.round);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(Ue, {
                title: (P == null ? void 0 : P.name) || "对局中",
                onBack: $,
                backLabel: "大厅",
                right: e.jsx("button", { className: "val-quit", onClick: d, children: "放弃" }),
            }),
            e.jsxs("div", {
                className: "val-hud",
                children: [
                    e.jsxs("button", {
                        className: "val-hud-map",
                        onClick: () => m(P),
                        children: [P == null ? void 0 : P.name, e.jsx(ln, { size: 10 })],
                    }),
                    e.jsxs("div", {
                        className: "val-hud-score",
                        children: [
                            e.jsx("span", {
                                className: `s${s.score.ally > s.score.enemy ? " lead" : ""}`,
                                children: s.score.ally,
                            }),
                            e.jsx("em", { children: ":" }),
                            e.jsx("span", {
                                className: `s${s.score.enemy > s.score.ally ? " lead" : ""}`,
                                children: s.score.enemy,
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "val-hud-meta",
                        children: [
                            e.jsxs("b", { children: ["第 ", s.roundNo, " 回合"] }),
                            e.jsx("i", { className: K, children: K === "attack" ? "进攻" : "防守" }),
                        ],
                    }),
                ],
            }),
            e.jsx("div", {
                className: "val-tabbar",
                children: e.jsx(ns, {
                    items: [
                        ["field", "战况"],
                        ["board", "记分板"],
                    ],
                    value: a,
                    onChange: i,
                }),
            }),
            e.jsxs("div", {
                className: "val-body match",
                children: [
                    a === "field" &&
                        e.jsxs(e.Fragment, {
                            children: [
                                !!E.length && e.jsx(Ee, { lines: E }),
                                (s.log || []).map((F) =>
                                    e.jsxs(
                                        Kn.Fragment,
                                        {
                                            children: [
                                                e.jsx(Ee, { lines: ie(F.round, "pre", "post") }),
                                                e.jsx(Pa, { entry: F, charName: t }),
                                                e.jsx(Ee, { lines: ie(F.round, "post", "post") }),
                                            ],
                                        },
                                        F.round,
                                    ),
                                ),
                                o
                                    ? e.jsxs(e.Fragment, {
                                          children: [
                                              e.jsxs("div", {
                                                  className: "val-sec-title",
                                                  children: [
                                                      "第 ",
                                                      s.roundNo,
                                                      " 回合",
                                                      o.phase
                                                          ? e.jsx("span", {
                                                                className: "val-sec-note",
                                                                children: o.phase,
                                                            })
                                                          : null,
                                                  ],
                                              }),
                                              e.jsx("div", { className: "val-premise", children: o.premise }),
                                              e.jsx(Ee, { lines: ie(s.roundNo, "pre", "pre") }),
                                              h === "round"
                                                  ? e.jsxs("div", {
                                                        className: "val-thinking",
                                                        children: [
                                                            e.jsx(J, { size: 14, className: "spin" }),
                                                            "这回合在打…",
                                                        ],
                                                    })
                                                  : e.jsx(La, { plan: o, busy: !!h, onChoose: c }),
                                          ],
                                      })
                                    : e.jsxs("div", {
                                          className: "val-empty",
                                          children: [
                                              "这一批排完了。",
                                              e.jsx("br", {}),
                                              e.jsx("button", {
                                                  className: "val-btn primary mt-3",
                                                  disabled: !!h,
                                                  onClick: j,
                                                  children:
                                                      h === "batch"
                                                          ? e.jsxs(e.Fragment, {
                                                                children: [
                                                                    e.jsx(J, { size: 14, className: "spin" }),
                                                                    "正在排…",
                                                                ],
                                                            })
                                                          : "排下一批回合",
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                    a === "board" &&
                        e.jsxs("div", {
                            className: "val-kda-wrap",
                            children: [
                                e.jsx(Ge, {
                                    title: "我方",
                                    players: s.roster.ally,
                                    kda: s.kda,
                                    rounds: Math.max(1, s.roundNo - 1),
                                    mine: s.myName,
                                }),
                                e.jsx(Ge, {
                                    title: "对面",
                                    players: s.roster.enemy,
                                    kda: s.kda,
                                    rounds: Math.max(1, s.roundNo - 1),
                                }),
                                !!s.arc &&
                                    e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx("div", {
                                                className: "val-sec-title sm",
                                                children: "这局的走向",
                                            }),
                                            e.jsx("div", { className: "val-narration dim", children: s.arc }),
                                        ],
                                    }),
                                !!s.shift &&
                                    e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx("div", {
                                                className: "val-sec-title sm",
                                                children: "你刚说的话改变了什么",
                                            }),
                                            e.jsx("div", {
                                                className: "val-narration dim",
                                                children: s.shift,
                                            }),
                                        ],
                                    }),
                                e.jsx("div", { className: "val-sec-title sm", children: "这一局" }),
                                e.jsxs("div", {
                                    className: "val-points-list",
                                    children: [
                                        e.jsxs("div", {
                                            className: "val-point-row",
                                            children: [
                                                e.jsx("span", { children: "已打回合" }),
                                                e.jsx("b", { children: s.roundNo - 1 }),
                                            ],
                                        }),
                                        e.jsxs("div", {
                                            className: "val-point-row",
                                            children: [
                                                e.jsx("span", { children: "本局 API 调用" }),
                                                e.jsx("b", { children: s.calls || 0 }),
                                            ],
                                        }),
                                        e.jsxs("div", {
                                            className: "val-point-row",
                                            children: [
                                                e.jsx("span", { children: "这批还剩" }),
                                                e.jsxs("b", { children: [Xn(s), " 回合"] }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
            a === "field" &&
                e.jsx(za, {
                    channel: l,
                    setChannel: r,
                    onSend: x,
                    busy: h === "voice",
                    partyNames: p,
                    roundNo: s.roundNo,
                    phase: z,
                    setPhase: D,
                }),
        ],
    });
}
function Oa({ result: n, charName: s, busy: t, onHome: a }) {
    var h, c;
    const { match: i, pts: l, rr: r } = n,
        o = i.result === "win";
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(Ue, {
                title: "对局结束",
                sub: (h = oe(i.map)) == null ? void 0 : h.name,
                onBack: a,
                backLabel: "大厅",
            }),
            e.jsxs("div", {
                className: "val-result-page",
                children: [
                    e.jsxs(re.div, {
                        className: `val-result-hero ${i.result}`,
                        initial: { opacity: 0, y: 16 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.34 },
                        children: [
                            e.jsx(re.div, {
                                className: "val-result-badge",
                                initial: { opacity: 0, scale: 0.9 },
                                animate: { opacity: 1, scale: 1 },
                                transition: { delay: 0.08 },
                                children: o ? "这局拿下了" : "这局输了",
                            }),
                            e.jsx("div", { className: "r", children: o ? "胜利" : "失败" }),
                            e.jsxs("div", {
                                className: "sc",
                                children: [
                                    e.jsx("b", { className: o ? "w" : "", children: i.score.ally }),
                                    e.jsx("em", { children: ":" }),
                                    e.jsx("b", { className: o ? "" : "w", children: i.score.enemy }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "mp",
                                children: [
                                    (c = _(i.myAgent)) == null ? void 0 : c.zh,
                                    " · ",
                                    i.myKda.k,
                                    "/",
                                    i.myKda.d,
                                    "/",
                                    i.myKda.a,
                                    " · ",
                                    i.rounds,
                                    " 回合",
                                    i.mvp === i.myName &&
                                        e.jsx("span", { className: "mvp", children: "MVP" }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "val-body",
                        children: [
                            r &&
                                e.jsxs(re.div, {
                                    className: `val-rr${r.delta >= 0 ? " up" : " down"}`,
                                    initial: { opacity: 0, x: -10 },
                                    animate: { opacity: 1, x: 0 },
                                    transition: { delay: 0.15 },
                                    children: [
                                        r.delta >= 0 ? e.jsx(Ts, { size: 15 }) : e.jsx(Ds, { size: 15 }),
                                        e.jsxs("b", { children: [r.delta >= 0 ? "+" : "", r.delta, " RR"] }),
                                        e.jsx("span", {
                                            children: r.promoted
                                                ? `升到 ${r.to}`
                                                : r.demoted
                                                  ? `掉到 ${r.to}`
                                                  : r.to,
                                        }),
                                    ],
                                }),
                            e.jsxs("div", {
                                className: "val-sec-title",
                                children: [
                                    "本场加分 ",
                                    e.jsxs("span", { className: "val-sec-note", children: ["+", l.total] }),
                                ],
                            }),
                            e.jsx("div", {
                                className: "val-points-list",
                                children: l.items.map((x, p) =>
                                    e.jsxs(
                                        re.div,
                                        {
                                            className: "val-point-row",
                                            initial: { opacity: 0 },
                                            animate: { opacity: 1 },
                                            transition: { delay: 0.06 * p },
                                            children: [
                                                e.jsx("span", { children: x.label }),
                                                e.jsxs("b", { children: ["+", x.value] }),
                                            ],
                                        },
                                        p,
                                    ),
                                ),
                            }),
                            !!(i.charMoments || []).length &&
                                e.jsxs(e.Fragment, {
                                    children: [
                                        e.jsxs("div", {
                                            className: "val-sec-title",
                                            children: [s, " 在这局里"],
                                        }),
                                        i.charMoments.map((x, p) =>
                                            e.jsx(
                                                "div",
                                                {
                                                    className: "val-char-moment flat",
                                                    children: e.jsx("div", { className: "b", children: x }),
                                                },
                                                p,
                                            ),
                                        ),
                                    ],
                                }),
                            e.jsxs("div", {
                                className: "val-sec-title",
                                children: [
                                    "赛后 · 房间麦",
                                    t === "post" &&
                                        e.jsx("span", { className: "val-sec-note", children: "他在说…" }),
                                ],
                            }),
                            (i.postLines || []).length === 0
                                ? e.jsx("div", {
                                      className: "val-narration dim",
                                      children: t === "post" ? "…" : "（他没说话）",
                                  })
                                : i.postLines.map((x, p) =>
                                      e.jsx(
                                          re.div,
                                          {
                                              className: "val-post-line",
                                              initial: { opacity: 0, y: 6 },
                                              animate: { opacity: 1, y: 0 },
                                              transition: { delay: 0.12 * p },
                                              children: x,
                                          },
                                          p,
                                      ),
                                  ),
                            !!i.highlights.length &&
                                e.jsxs(e.Fragment, {
                                    children: [
                                        e.jsx("div", { className: "val-sec-title", children: "这局记住了" }),
                                        e.jsx("div", {
                                            className: "val-narration",
                                            children: i.highlights.join("；"),
                                        }),
                                    ],
                                }),
                            e.jsx("div", { className: "val-sec-title", children: "记忆" }),
                            e.jsx("div", {
                                className: "val-hint-box",
                                children: n.flush
                                    ? e.jsxs(e.Fragment, {
                                          children: ["已写进记忆：", e.jsx("br", {}), i.memoryLine],
                                      })
                                    : e.jsxs(e.Fragment, {
                                          children: [
                                              "设置的是每 ",
                                              n.every,
                                              " 把记一次，现在攒了 ",
                                              n.pendingAfter,
                                              " 把 —— 还没写进记忆。",
                                          ],
                                      }),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx("div", {
                className: "val-footbar",
                children: e.jsx("button", {
                    className: "val-btn primary wide big flat",
                    onClick: a,
                    children: "回到大厅",
                }),
            }),
        ],
    });
}
function Ya({ onBack: n }) {
    const {
            state: s,
            valPatch: t,
            valUpsertAccount: a,
            valRemoveAccount: i,
            valSetLive: l,
            valArchiveMatch: r,
            patchChar: o,
        } = $s(),
        h = As(),
        c = s.valorant || {},
        x = c.accounts || [],
        p = c.party || { me: null, char: null, friends: [] },
        m = c.live,
        d = y.useMemo(
            () =>
                (c.charId && s.characters.find((b) => b.id === c.charId)) ||
                s.characters.find((b) => b.id === s.activeCharId) ||
                s.characters[0] ||
                null,
            [s.characters, s.activeCharId, c.charId],
        ),
        j = d ? Fe(d) : "TA",
        $ = Ss(s.me) || "我",
        z = c.server || Tn(d == null ? void 0 : d.nationality) || Q,
        D = rn(z),
        K = y.useCallback((u) => ((u == null ? void 0 : u.server) || Q) === z, [z]),
        P = _n.usableLane(s.api.valorant, s.api.chat),
        [te, ie] = y.useState(m ? "match" : "lobby"),
        [E, F] = y.useState(1),
        T = y.useCallback((u, b = 1) => {
            (F(b), ie(u));
        }, []),
        [ue, q] = y.useState("party"),
        [k, I] = y.useState("field"),
        [O, ve] = y.useState("pre");
    y.useEffect(() => {
        ve("pre");
    }, [m == null ? void 0 : m.roundNo]);
    const [H, B] = y.useState(""),
        [ze, Le] = y.useState(null),
        [ge, Pe] = y.useState(null),
        Ye = y.useCallback(
            (u) => {
                !u ||
                    u === z ||
                    t((b) => {
                        const f = b.server || Tn(d == null ? void 0 : d.nationality) || Q,
                            g = {
                                ...(b.partiesByServer || {}),
                                [f]: b.party || { me: null, char: null, friends: [] },
                            };
                        return {
                            server: u,
                            partiesByServer: g,
                            party: g[u] || { me: null, char: null, friends: [] },
                            invite: null,
                        };
                    });
            },
            [z, t, d == null ? void 0 : d.nationality],
        ),
        [Ie, Ae] = y.useState(null),
        [v, L] = y.useState(null),
        [de, Re] = y.useState(null),
        [hn, We] = y.useState([]),
        [mn, fn] = y.useState(""),
        [ss, pn] = y.useState("party"),
        [Se, as] = y.useState(null),
        [xn, Ve] = y.useState(null),
        [jn, bn] = y.useState([]),
        [ts, vn] = y.useState([]),
        [gn, yn] = y.useState([]),
        [Nn, kn] = y.useState(""),
        [is, $n] = y.useState(!1),
        [An, Qe] = y.useState(null),
        [ls, Sn] = y.useState(!1),
        [rs, Ze] = y.useState(!1),
        qe = y.useCallback((u) => x.find((b) => b.id === u) || null, [x]),
        V = qe(p.me),
        R = qe(p.char),
        X = (p.friends || []).map(qe).filter(Boolean),
        Cn = y.useMemo(() => x.filter((u) => !u.charId || u.charId === (d == null ? void 0 : d.id)), [x, d]),
        wn = y.useMemo(() => Cn.filter((u) => u.real && K(u)), [Cn, K]),
        cs = y.useMemo(() => {
            const u = (g) => Fe(s.characters.find((N) => N.id === g) || {}) || "已删除的角色",
                b = [],
                f = [z, ...$e.map((g) => g.id).filter((g) => g !== z)];
            for (const g of f) {
                const N = x.filter((A) => (A.server || Q) === g);
                if (!N.length) continue;
                const S = new Map(),
                    C = [];
                for (const A of N) {
                    if (!A.charId) {
                        C.push(A);
                        continue;
                    }
                    (S.has(A.charId) || S.set(A.charId, []), S.get(A.charId).push(A));
                }
                const M = rn(g).label + (g === z ? "（当前）" : "");
                C.length && b.push({ key: `${g}_free`, label: `${M} · 通用`, items: C });
                for (const [A, w] of S.entries())
                    b.push({ key: `${g}_${A}`, label: `${M} · 绑定：${u(A)}`, items: w });
            }
            return b;
        }, [x, s.characters, z]),
        le = y.useMemo(() => [V, R, ...X].filter(Boolean).map((u) => u.name), [V, R, X]),
        U = y.useMemo(() => Na(d), [d]),
        Y = y.useMemo(() => {
            try {
                return Cs({ only: ws });
            } catch {
                return "";
            }
        }, []),
        W = y.useMemo(() => {
            var b;
            let u = "";
            try {
                u = ((b = Bs(d == null ? void 0 : d.id)) == null ? void 0 : b.outputLanguage) || "";
            } catch {}
            return Us({
                serverId: z,
                nationality: (d == null ? void 0 : d.nationality) || "",
                outputLanguage: u,
                charName: j,
                meName: $,
            });
        }, [d == null ? void 0 : d.id, d == null ? void 0 : d.nationality, j, $, z]),
        Bn = y.useMemo(() => ka(d, s), [d, s]),
        Te = Bn.context,
        Xe = Bn.hits,
        pe = () =>
            P != null && P.baseUrl
                ? !1
                : (h("先在 API 设置 → 对局 里配好通道（留空会走聊天通道）", "error"), !0),
        os = y.useCallback(() => {
            (t((u) => ({ calls: (u.calls || 0) + 1 })), l((u) => u && { ...u, calls: (u.calls || 0) + 1 }));
        }, [t, l]),
        ye = y.useRef(null);
    y.useEffect(
        () => () => {
            var u;
            return (u = ye.current) == null ? void 0 : u.abort();
        },
        [],
    );
    const us = y.useCallback(() => {
            var u;
            ((u = ye.current) == null || u.abort(), (ye.current = null), B(""));
        }, []),
        ee = async (u, b, f) => {
            os();
            const g = new AbortController();
            ye.current = g;
            try {
                const N = await _n.chat(
                    P,
                    [
                        { role: "system", content: u },
                        { role: "user", content: b },
                    ],
                    { max_tokens: f || c.maxTokens || 16e3, fallback: s.api.chat, signal: g.signal },
                );
                return Js(N.content);
            } finally {
                ye.current === g && (ye.current = null);
            }
        },
        en = y.useCallback(
            (u, b) =>
                [
                    ...(u.partyVoice || []).map((f) => ({ ...f, channel: "party" })),
                    ...(u.teamVoice || []).map((f) => ({ ...f, channel: "team" })),
                    ...(u.allVoice || []).map((f) => ({ ...f, channel: "all" })),
                ]
                    .map((f) => ({
                        channel: f.channel,
                        name: String(f.name || "?"),
                        text: String(f.text || ""),
                        isChar: !!R && f.name === R.name,
                        round: b ? b.round : m == null ? void 0 : m.roundNo,
                        phase: b ? b.phase : "pre",
                        at: Date.now(),
                    }))
                    .filter((f) => f.text),
            [R, m == null ? void 0 : m.roundNo],
        ),
        De = async (u, b, f = "", g = "", N = null) => {
            if (pe()) return null;
            B(`acct:${b}`);
            try {
                const S = x.filter(
                        (A) => A.owner === u && (u !== "char" || A.charId === (d == null ? void 0 : d.id)),
                    ),
                    C = await ee(
                        Ys({
                            owner: u,
                            ownerName: g || (u === "char" ? j : u === "me" ? $ : "朋友"),
                            personaBlock: u === "char" ? U : "",
                            coreBlock: u === "char" ? Y : "",
                            langBlock: u === "char" ? W : "",
                            memoryHits: Xe,
                            memoryBlock: Te,
                            hint: f,
                            existing: S,
                            seed: N,
                        }),
                        "生成。",
                        700,
                    );
                if (!C) return (h("没解析出账号资料，再试一次", "error"), null);
                const M = {
                    ...Dn(C, u, g),
                    ...(N != null && N.name ? { name: N.name } : {}),
                    ...(N != null && N.rank ? { rank: N.rank } : {}),
                    ...(N != null && N.note ? { note: N.note } : {}),
                    id: we("va_"),
                    charId: u === "char" ? (d == null ? void 0 : d.id) : void 0,
                    createdAt: Date.now(),
                    server: z,
                };
                return (
                    a(M),
                    t((A) => ({
                        party:
                            b === "me"
                                ? { ...A.party, me: M.id }
                                : b === "char"
                                  ? { ...A.party, char: M.id }
                                  : { ...A.party, friends: [...(A.party.friends || []), M.id] },
                    })),
                    M
                );
            } catch (S) {
                return (je(S) || h(S.message || "生成失败", "error"), null);
            } finally {
                B("");
            }
        },
        Ne = c.invite || null,
        ds = async () => {
            if (pe()) return;
            if (!d) {
                h("先去联系人里建一个角色", "error");
                return;
            }
            if (!V) {
                h("先把自己的号填好", "error");
                return;
            }
            B("invite");
            const u = we("m_"),
                b = Date.now();
            (o(d.id, (f) => ({
                messages: [
                    ...(f.messages || []),
                    {
                        id: u,
                        role: "user",
                        type: "game_invite_card",
                        content: "",
                        status: "pending",
                        createdAt: b,
                    },
                ],
            })),
                t({ invite: { status: "pending", at: b, msgId: u, reason: "" } }));
            try {
                const f = (d.messages || [])
                        .slice(-16)
                        .filter(
                            (M) =>
                                M.role !== "system" && (M.type === "text" || M.type === "voice" || !M.type),
                        )
                        .map((M) => ({
                            who: M.role === "user" ? "me" : "char",
                            text: M.content,
                            at: M.createdAt,
                        })),
                    g = await ee(
                        ga({
                            personaBlock: U,
                            coreBlock: Y,
                            langBlock: W,
                            memoryHits: Xe,
                            recentChat: f,
                            charName: j,
                            meName: $,
                            myAcct: V,
                            nowText: new Date().toLocaleString("zh-CN", {
                                hour: "2-digit",
                                minute: "2-digit",
                                weekday: "long",
                            }),
                        }),
                        "接不接？",
                        800,
                    ),
                    N = (g == null ? void 0 : g.accept) === !0,
                    S = Array.isArray(g == null ? void 0 : g.reply)
                        ? g.reply.map(String).filter(Boolean)
                        : [],
                    C = N ? "accepted" : "declined";
                (o(d.id, (M) => ({
                    messages: [
                        ...(M.messages || []).map((A) => (A.id === u ? { ...A, status: C } : A)),
                        ...S.map((A, w) => ({
                            id: we("m_"),
                            role: "assistant",
                            type: "text",
                            content: A,
                            createdAt: Date.now() + w,
                        })),
                    ],
                })),
                    t({
                        invite: {
                            status: C,
                            at: Date.now(),
                            msgId: u,
                            reason: String((g == null ? void 0 : g.reason) || ""),
                        },
                    }),
                    N ? (h(`${j} 进队了`), R || (await De("char", "char", "", j))) : h(`${j} 这次没来`));
            } catch (f) {
                (je(f) || h(f.message || "邀请没发出去", "error"),
                    t({ invite: null }),
                    o(d.id, (g) => ({ messages: (g.messages || []).filter((N) => N.id !== u) })));
            } finally {
                B("");
            }
        },
        hs = async (u = "") => {
            var b;
            if (!pe()) {
                B("acct:all");
                try {
                    const f = X.map((w) => ({ name: w.name, note: w.note })),
                        g = {};
                    (V != null && V.rank && (g.me = { name: V.name, rank: V.rank, note: V.note }),
                        X.forEach((w, ne) => {
                            w.rank && (g[`friend${ne}`] = { name: w.name, rank: w.rank, note: w.note });
                        }));
                    const N = await ee(
                            ja({
                                meName: $,
                                charName: d ? j : "",
                                friends: f,
                                personaBlock: U,
                                coreBlock: Y,
                                langBlock: W,
                                memoryHits: Xe,
                                memoryBlock: Te,
                                hint: u,
                                seeds: g,
                            }),
                            "生成整队。",
                            2400,
                        ),
                        S = (N == null ? void 0 : N.accounts) || N;
                    if (!S || typeof S != "object") {
                        h("没解析出账号，再试一次", "error");
                        return;
                    }
                    const C = {},
                        M = (w, ne, Ce) => {
                            if (!S[w]) return null;
                            const se = {
                                ...Dn(S[w], ne, Ce),
                                id: we("va_"),
                                charId: ne === "char" ? (d == null ? void 0 : d.id) : void 0,
                                createdAt: Date.now(),
                                server: z,
                            };
                            return (a(se), (C[w] = se.id), se);
                        };
                    (M("me", "me", $), d && M("char", "char", j));
                    const A = [];
                    for (let w = 0; w < Math.max(f.length, 0); w++) {
                        const ne = M(`friend${w}`, "friend", ((b = f[w]) == null ? void 0 : b.name) || "");
                        ne && A.push(ne.id);
                    }
                    (t((w) => ({
                        party: {
                            me: C.me || w.party.me,
                            char: C.char || w.party.char,
                            friends: A.length ? A : w.party.friends,
                        },
                    })),
                        h("整队账号生成好了"));
                } catch (f) {
                    je(f) || h(f.message || "生成失败", "error");
                } finally {
                    B("");
                }
            }
        },
        ms = async () => {
            const u = mn.trim();
            if (!u || H || pe()) return;
            if (!d) {
                h("先去联系人里建一个角色", "error");
                return;
            }
            fn("");
            const b = { who: "me", text: u, at: Date.now() };
            (We((f) => [...f, b]), B("lobby"));
            try {
                const f =
                        (await ee(
                            qs({
                                personaBlock: U,
                                coreBlock: Y,
                                langBlock: W,
                                memoryBlock: Te,
                                charName: j,
                                meName: $,
                                charAcct: R,
                                history: [...hn, b],
                                text: u,
                            }),
                            u,
                            700,
                        )) || {},
                    g = Array.isArray(f.reply) ? f.reply : f.reply ? [String(f.reply)] : [];
                if (
                    (We((N) => [...N, ...g.map((S) => ({ who: "char", text: String(S), at: Date.now() }))]),
                    f.action === "new_account" || f.action === "edit_account")
                ) {
                    B("");
                    const N = await De("char", "char", f.hint || u, j);
                    N && h(`${j} 换成了 ${N.name}#${N.tag}`);
                }
            } catch (f) {
                je(f) || h(f.message || "没聊通", "error");
            } finally {
                B("");
            }
        },
        fs = () => {
            if (!V) {
                h("先把自己的号填好", "error");
                return;
            }
            (as(Rn()), Ve(null), bn([]), vn([]), yn([]), kn(""), T("matching", 1));
        },
        ps = y.useCallback(async () => {
            if ((T("agent", 1), !!(P != null && P.baseUrl))) {
                $n(!0);
                try {
                    const u = [
                            { name: V.name, isMe: !0 },
                            R ? { name: R.name, agent: (R.mainAgents || [])[0] || "", isChar: !0 } : null,
                            ...X.map((f) => ({ name: f.name, agent: (f.mainAgents || [])[0] || "" })),
                        ].filter(Boolean),
                        b = await ee(
                            da({
                                mapId: (Se || {}).id,
                                allySlots: u,
                                myAgent: null,
                                personaBlock: U,
                                coreBlock: Y,
                                langBlock: W,
                                charName: j,
                                meName: $,
                                partyNames: le,
                            }),
                            "开始选人。",
                            1800,
                        );
                    b &&
                        (bn(
                            (b.allies || []).map((f) => ({
                                name: String(f.name || "?"),
                                agent: String(f.agent || ""),
                                note: String(f.note || ""),
                            })),
                        ),
                        vn(
                            (b.enemy || []).map((f) => ({
                                name: String(f.name || "?"),
                                agent: String(f.agent || ""),
                                note: String(f.note || ""),
                            })),
                        ),
                        yn(en(b)),
                        kn(String(b.vibe || "")));
                } catch {
                } finally {
                    $n(!1);
                }
            }
        }, [P, V, R, X, Se, U, Y, W, j, $, le, en]),
        xs = async (u) => {
            if (pe()) return;
            const b = u || xn;
            if (!b) {
                h("先选一个英雄", "error");
                return;
            }
            Ve(b);
            const f = Se || Rn();
            B("plan");
            try {
                const g = [
                        { name: V.name, agent: b, isMe: !0, isParty: !0 },
                        R
                            ? {
                                  name: R.name,
                                  agent: (R.mainAgents || [])[0] || "omen",
                                  isChar: !0,
                                  isParty: !0,
                              }
                            : null,
                        ...X.map((M) => ({
                            name: M.name,
                            agent: (M.mainAgents || [])[0] || "sage",
                            isParty: !0,
                        })),
                        ...jn,
                    ].filter(Boolean),
                    { ally: N, enemy: S } = pa({ ally: g, enemy: ts, serverId: z }),
                    C = await ee(
                        Ws({
                            mapId: f.id,
                            ally: N,
                            enemy: S,
                            vibe: Nn,
                            personaBlock: U,
                            coreBlock: Y,
                            langBlock: W,
                            memoryBlock: Te,
                            charName: j,
                            meName: $,
                            partyNames: le,
                        }),
                        "开一局。",
                    );
                if (!C || !Array.isArray(C.rounds) || !C.rounds.length) {
                    h("对局没生成出来，再试一次", "error");
                    return;
                }
                (l({
                    id: we("vm_"),
                    charId: (d == null ? void 0 : d.id) || null,
                    at: Date.now(),
                    map: f.id,
                    startSide: C.side === "defense" ? "defense" : "attack",
                    side: C.side === "defense" ? "defense" : "attack",
                    roundNo: 1,
                    score: { ally: 0, enemy: 0 },
                    myName: V.name,
                    myAgent: b,
                    roster: { ally: N, enemy: S },
                    kda: {},
                    arc: String(C.arc || ""),
                    keyPlayer: String(C.keyPlayer || ""),
                    turningPoints: Array.isArray(C.turningPoints) ? C.turningPoints : [],
                    plan: C.rounds,
                    log: [],
                    saidLog: gn,
                    acctIds: [p.me, p.char, ...(p.friends || [])].filter(Boolean),
                }),
                    I("field"),
                    pn("party"),
                    T("match", 1));
            } catch (g) {
                je(g) || h(g.message || "开局失败", "error");
            } finally {
                B("");
            }
        },
        js = y.useMemo(() => {
            if (!m) return null;
            const u = m.plan || [];
            return u.find((b) => Number(b.round) === m.roundNo) || u[0] || null;
        }, [m]),
        Mn = async (u) => {
            B("batch");
            try {
                const b = await ee(
                    xa({
                        mapId: u.map,
                        live: u,
                        batchRounds: c.batchRounds || He,
                        personaBlock: U,
                        coreBlock: Y,
                        langBlock: W,
                        charName: j,
                        meName: $,
                        partyNames: le,
                    }),
                    `排第 ${u.roundNo} 回合往后。`,
                );
                if (!b || !Array.isArray(b.rounds) || !b.rounds.length) {
                    h('下一批没排出来，点一下"继续"再试', "error");
                    return;
                }
                l((f) => ({
                    ...f,
                    arc: b.arc ? String(b.arc) : f.arc,
                    plan: sn(f.plan, b.rounds, f.roundNo),
                }));
            } catch (b) {
                je(b) || h(b.message || "排下一批失败", "error");
            } finally {
                B("");
            }
        },
        bs = async (u) => {
            if (!m || H) return;
            if (u.custom) {
                if (pe()) return;
                B("round");
                try {
                    const f = await ee(
                        Qs({
                            mapId: m.map,
                            live: m,
                            chosen: u,
                            personaBlock: U,
                            coreBlock: Y,
                            langBlock: W,
                            charName: j,
                            meName: $,
                            partyNames: le,
                        }),
                        `我选：${u.label}`,
                    );
                    if (!f) {
                        h("这回合没跑出来，再点一次", "error");
                        return;
                    }
                    const g = {
                            ...u,
                            win: f.win !== void 0 ? !!f.win : !0,
                            outcome: String(f.narration || ""),
                            charMoment: String(f.charMoment || ""),
                            firstBlood: String(f.firstBlood || ""),
                            clutch: String(f.clutch || ""),
                            kda: f.kda || [],
                            partyVoice: f.partyVoice || [],
                            teamVoice: f.teamVoice || [],
                            allVoice: f.allVoice || [],
                        },
                        N = On(m, g, R == null ? void 0 : R.name);
                    (Array.isArray(f.rounds) && f.rounds.length && (N.plan = sn(m.plan, f.rounds, N.roundNo)),
                        f.arc && (N.arc = String(f.arc)),
                        l(N),
                        await zn(N));
                } catch (f) {
                    je(f) || h(f.message || "这回合失败了", "error");
                } finally {
                    B("");
                }
                return;
            }
            const b = On(m, u, R == null ? void 0 : R.name);
            (l(b), await zn(b));
        },
        zn = async (u) => {
            const b = ta(u.score);
            if (b) {
                gs(u, b);
                return;
            }
            (ia(u.roundNo) && h("半场交换 —— 换边了"), Xn(u) === 0 && (await Mn(u)));
        },
        vs = async (u, b, f) => {
            if (!m || H || pe()) return;
            const g = f && Number.isFinite(f.round) ? f : { round: m.roundNo, phase: "pre" },
                N = {
                    channel: b,
                    name: m.myName,
                    text: u,
                    isMe: !0,
                    round: g.round,
                    phase: g.phase,
                    at: Date.now(),
                };
            (l((S) => ({ ...S, saidLog: [...(S.saidLog || []), N] })), B("voice"));
            try {
                const S =
                    (await ee(
                        Zs({
                            mapId: m.map,
                            live: { ...m, saidLog: [...(m.saidLog || []), N] },
                            channel: b,
                            text: u,
                            meName: m.myName,
                            personaBlock: U,
                            coreBlock: Y,
                            langBlock: W,
                            charName: j,
                            partyNames: le,
                        }),
                        u,
                        1800,
                    )) || {};
                (l((C) => ({
                    ...C,
                    saidLog: [...(C.saidLog || []), ...en(S, g)],
                    plan:
                        Array.isArray(S.rounds) && S.rounds.length ? sn(C.plan, S.rounds, C.roundNo) : C.plan,
                    shift: S.shift ? String(S.shift) : C.shift,
                })),
                    S.shift && h(String(S.shift).slice(0, 40)));
            } catch (S) {
                h(S.message || "没说出去", "error");
            } finally {
                B("");
            }
        },
        gs = async (u, b) => {
            var Pn;
            const f = ((Pn = u.kda) == null ? void 0 : Pn[u.myName]) || { k: 0, d: 0, a: 0 },
                g = u.roundNo - 1,
                N = Object.entries(u.kda || {})
                    .map(([G, xe]) => ({ name: G, acs: _e(xe, g) }))
                    .sort((G, xe) => xe.acs - G.acs)[0],
                S = _e(f, g),
                C = (N == null ? void 0 : N.name) === u.myName,
                M = ra({ result: b, score: u.score, myKda: f, rounds: g, withChar: !!R, mvp: C }),
                A = V ? ea(V, Xs({ result: b, acs: S, mvp: C })) : null,
                w = {
                    id: u.id,
                    charId: u.charId,
                    at: Date.now(),
                    map: u.map,
                    myAgent: u.myAgent,
                    myName: u.myName,
                    score: u.score,
                    result: b,
                    rounds: g,
                    myKda: f,
                    kda: u.kda,
                    roster: u.roster,
                    log: u.log,
                    saidLog: u.saidLog,
                    highlights: ua(u.log),
                    charMoments: (u.log || [])
                        .map((G) => G.charMoment)
                        .filter(Boolean)
                        .slice(-4),
                    points: M.total,
                    mvp: (N == null ? void 0 : N.name) || "",
                    rr: A
                        ? { delta: A.delta, from: A.from, to: A.to, promoted: A.promoted, demoted: A.demoted }
                        : null,
                    postLines: [],
                },
                ne = Math.max(1, Number(c.memoryEvery) || 1),
                Ce = c.pending || [],
                se = sa(Ce.length + 1, ne),
                ks = se ? [...(c.matches || []).filter((G) => Ce.includes(G.id)), w] : [w],
                Ln = se ? na(ks, $, j) : "";
            if (
                (r({
                    match: w,
                    points: M.total,
                    usedAccountIds: u.acctIds,
                    memoryLine: Ln,
                    flush: se,
                    rrAccount: A ? { id: V.id, rank: A.acct.rank, rr: A.acct.rr } : null,
                }),
                Qe({
                    match: { ...w, memoryLine: se ? Ln : "" },
                    pts: M,
                    rr: A,
                    flush: se,
                    every: ne,
                    pendingAfter: se ? 0 : Ce.length + 1,
                }),
                T("result", 1),
                d && P != null && P.baseUrl)
            ) {
                B("post");
                try {
                    const G = await ee(
                            aa({
                                match: w,
                                personaBlock: U,
                                coreBlock: Y,
                                langBlock: W,
                                charName: j,
                                meName: $,
                                rr: A,
                                partyNames: le,
                            }),
                            "说两句。",
                            800,
                        ),
                        xe = Array.isArray(G == null ? void 0 : G.lines)
                            ? G.lines.map(String).filter(Boolean)
                            : [];
                    xe.length &&
                        (Qe((ke) => ke && { ...ke, match: { ...ke.match, postLines: xe } }),
                        t((ke) => ({
                            matches: (ke.matches || []).map((nn) =>
                                nn.id === w.id ? { ...nn, postLines: xe } : nn,
                            ),
                        })));
                } catch {
                } finally {
                    B("");
                }
            }
        },
        ys = () => {
            (l(null), T("lobby", -1), h("这局不算了"));
        },
        Ns = {
            lobby: e.jsx(Ta, {
                state: s,
                val: c,
                charName: j,
                meName: $,
                server: z,
                serverMeta: D,
                switchServer: Ye,
                myAcct: V,
                charAcct: R,
                friendAccts: X,
                partyNames: le,
                realAccounts: wn,
                lobbyTab: ue,
                setLobbyTab: q,
                busy: H,
                genAccount: De,
                valPatch: t,
                valRemoveAccount: i,
                setEditing: Le,
                setPicking: Pe,
                setDetail: Re,
                lobbyChat: hn,
                lobbyText: mn,
                setLobbyText: fn,
                sendLobby: ms,
                onStart: fs,
                onBack: n,
                genParty: hs,
                onSwitchChar: () => Sn(!0),
                onAddFriend: () => Ze(!0),
                vaultGroups: cs,
                live: m,
                party: p,
                inviteStatus: (Ne == null ? void 0 : Ne.status) || null,
                inviteReason: (Ne == null ? void 0 : Ne.reason) || "",
                sendInvite: ds,
                onResume: () => {
                    (I("field"), T("match", 1));
                },
                onDropLive: () => {
                    (l(null), h("那局不要了"));
                },
            }),
            matching: e.jsx(Da, { map: Se, onDone: ps, onCancel: () => T("lobby", -1) }),
            agent: e.jsx(Ea, {
                map: Se,
                myAcct: V,
                charAcct: R,
                friendAccts: X,
                charName: j,
                myAgent: xn,
                setMyAgent: Ve,
                picks: jn,
                selectVoice: gn,
                vibe: Nn,
                loadingPicks: is,
                busy: H,
                onLock: xs,
                onQuit: () => T("lobby", -1),
                setAgentPeek: Ae,
                setMapPeek: L,
            }),
            match: m
                ? e.jsx(Fa, {
                      live: m,
                      charName: j,
                      matchTab: k,
                      setMatchTab: I,
                      channel: ss,
                      setChannel: pn,
                      currentPlan: js,
                      busy: H,
                      chooseOption: bs,
                      sendVoice: vs,
                      voicePhase: O,
                      setVoicePhase: ve,
                      partyNames: le,
                      setMapPeek: L,
                      onAbandon: ys,
                      onContinue: () => Mn(m),
                      onLeave: () => T("lobby", -1),
                  })
                : null,
            result: An
                ? e.jsx(Oa, {
                      result: An,
                      charName: j,
                      busy: H,
                      onHome: () => {
                          (Qe(null), q("party"), T("lobby", -1));
                      },
                  })
                : null,
        };
    return e.jsxs("div", {
        className: "val-root",
        children: [
            e.jsx(Gn, {
                initial: !1,
                custom: E,
                children: e.jsx(
                    re.div,
                    {
                        className: "val-page",
                        custom: E,
                        variants: Ra,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        transition: Va,
                        children: Ns[te],
                    },
                    te,
                ),
            }),
            !!H &&
                e.jsxs("button", {
                    className: "val-stop-bar",
                    onClick: us,
                    children: [
                        e.jsx("span", { className: "val-stop-mark" }),
                        e.jsx("span", { children: "正在生成 · 点这里停下" }),
                    ],
                }),
            e.jsx($a, {
                open: !!ze,
                acct: ze,
                chars: s.characters,
                onClose: () => Le(null),
                onSave: (u) => a(u),
            }),
            e.jsx(Sa, {
                open: ls,
                chars: s.characters,
                currentId: d == null ? void 0 : d.id,
                onClose: () => Sn(!1),
                onPick: (u) => {
                    (t({ charId: u, invite: null, party: { me: null, char: null, friends: [] } }), We([]));
                },
            }),
            e.jsx(Ca, {
                open: rs,
                busy: H.startsWith("acct:"),
                onClose: () => Ze(!1),
                onCreate: async (u) => {
                    (Ze(!1), await De("friend", `f${X.length}`, "", u.name || "", u));
                },
            }),
            e.jsx(Aa, {
                open: ge !== null,
                accounts: wn,
                onClose: () => Pe(null),
                onPick: (u) =>
                    t((b) => ({
                        party:
                            ge === "me"
                                ? { ...b.party, me: u.id }
                                : ge === "char"
                                  ? { ...b.party, char: u.id }
                                  : {
                                        ...b.party,
                                        friends: (b.party.friends || []).map((f, g) => (g === ge ? u.id : f)),
                                    },
                    })),
            }),
            e.jsx(wa, { open: !!Ie, agent: Ie, onClose: () => Ae(null), onLock: Ve }),
            e.jsx(Ba, { open: !!v, map: v, onClose: () => L(null) }),
            e.jsx(Ia, { open: !!de, match: de, onClose: () => Re(null), charName: j }),
        ],
    });
}
export { Ya as default };
