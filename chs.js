/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Costs": "成本",
    "fire": "火焰",
    "gold": "黄金",
    "Gold:": "黄金:",
    "magic": "魔法",
    "Magic": "魔法",
    "max": "最大",
    "Max all": "全部最大",
    "Dragon": "龙",
    "Enter challenges": "进入挑战",
    "every second (": "每秒（",
    "Fire:": "火焰:",
    "gold gain": "黄金增益",
    "Gold increases fire/second": "黄金增加 火焰/秒",
    "Hard reset": "硬复位",
    "HIGHEST SCORES:": "最高分：",
    "Hire a gold miner": "雇用一个黄金矿工",
    "Increase fire effect": "提高火焰的效果",
    "Increase fire production": "提高火焰的产量",
    "Increase gold/click": "提高 黄金/点击",
    "Increase magic effect (": "提高魔法效果 （",
    "Increase platinum gain": "提高铂金增益",
    "(magifolds), which give": "（Magifolds），它给了",
    "(You cannot do anything with your dragon while inside challenges)": "（在挑战中你不能对你的龙做任何事情）",
    "Buy max": "购买最大",
    "Buy": "购买",
    "Challenge B1's effect is better": "挑战B1的效果更好",
    "Challenge score gain is doubled": "挑战分数增益翻倍",
    "Confirmation popups": "确认弹出窗口",
    "Convert all gold into": "将所有黄金转化为",
    "Convert all platinum into": "将所有铂金转化为",
    "Corrupt your dragon with the power of darkness": "用黑暗的力量腐蚀你的龙",
    "Unlock alchemy": "解锁炼金术",
    "Unlock a new fire upgrade (": "解锁新的火焰升级（",
    "uranium": "铀",
    "uranium (": "铀 (",
    "Uranium": "铀",
    "Uranium:": "铀:",
    "Get a young dragon": "得到一条幼龙",
    "Gain more platinum and uranium upgrades": "获得更多的铂金和铀升级",
    "Gain 20% more gold/second (": "每秒多获得 20% 的黄金 (",
    "Gain 20% more fire/second (": "每秒增加 20% 的火焰 (",
    "Fire upgrades": "火焰升级",
    "Next feed requires": "下一次喂养要求",
    "platinum": "铂金",
    "platinum (": "铂金 (",
    "Resources": "资源",
    "Move around by clicking and dragging.": "通过单击和拖动来移动。",
    "If you find the text is too small, you might want to zoom in the window :)": "如果您发现文本太小，您可能需要缩放窗口 :)",
    "If you aren't on a mobile device and are seeing this, please let me know on discord!": "如果您不在移动设备上并且看到此内容，请在 discord 上告诉我！",
    "Infuse your dragon with the power of light": "为你的龙注入光之力量",
    "It looks like you're on a mobile device! Since I haven't yet figured out how to make the game work properly on mobile, it's disabled for now. Sorry...": "看起来你在移动设备上！ 由于我还没有弄清楚如何让游戏在移动设备上正常运行，所以现在它被禁用了。 抱歉...",
    "You have a": "你有一个",
    "You have fed your dragon": "你喂养了你的龙",
    "You will gai": "你将获得",
    "Young dragon": "幼龙",
    "Your dragon is seeking affection!": "你的龙正在寻求亲情！",
    "Your fire is multiplying miner production by": "你的火焰倍增矿工产量",
    "Your magic is multiplying your gold gain by": "你的魔法倍增黄金收益",
    "Your wild young dragon produces fire for you. It enjoys playing around on your gold stash.": "你的野生幼龙为你生产火焰。 它喜欢在你的黄金藏匿处玩耍。",
    "/click)": "/点击)",
    "Age your dragon into an adult": "让你的龙成年",
    "Age your dragon into an elder": "让你的龙变老",
    "Alchemy": "炼金术",
    "Alchemy II": "炼金术 II",
    "Automatically gain 100% of your potential magic": "自动获得 100% 的潜在魔法",
    "Automatically gain platinum every second (": "每秒自动获得铂金 (",
    "Automatically spend time with your dragon when possible": "可能自动花时间与您的龙相处",
    "Bonuses are based on the highest score achieved in each amount of challenges, multiplied together.": "奖金是基于在每个挑战中取得的最高分数，相乘。",
    "Currently ^": "当前 ^",
    "Currently x": "当前 x",
    "dark magic upgrades": "黑暗魔法升级",
    "Dark magic upgrades": "黑暗魔法升级",
    "Unlock": "解锁",
    "Miners:": "矿工:",
    "Mine gold": "开采黄金",
    "Manual save": "手动保存",
    "Magifolds:": "Magifolds:",
    "Magifolds multiply score gain": "Magifolds 倍增分数增益",
    "magifolds": "magifolds",
    "Magic:": "魔法:",
    "Settings and info": "设置和信息",
    "Reset all previous resources and upgrades": "重置所有以前的资源和升级",
    "Platinum:": "铂金:",
    "Score gain is doubled": "分数增益翻倍",
    "Platinum upgrade 6 is boosted (": "铂金 升级6 被提升（",
    "Platinum increases gold/second (": "铂金增加 黄金/秒 (（",
    "Miners increase gold/second": "矿工增加 黄金/秒",
    "Magic upgrades": "魔法升级",
    "You have an": "你有一条",
    "You will gain": "你将获得",
    "Your large dragon friend inspires awe and fear, and spews fire for you.": "你的大龙朋友会激发敬畏和恐惧，并为你喷火。",
    "You have spent time with your dragon": "你和你的龙一起度过了时光",
    "You are gaining stronger control over your magic powers.": "你正在对自己的魔法力量进行更强的控制。",
    "Uranium upgrades are kept on magic resets.": "在魔法重置时保留铀升级。",
    "Adult dragon": "成年龙",
    "DodecaDragons": "十二龙",
    "Double score gain (": "双倍分数增益（",
    "Double uranium gain (": "双倍铀增益（",
    "Feed your dragon": "喂你的龙",
    "Fire upgrade 1 is boosted": "火焰升级1增强",
    "Fire upgrade 2 is boosted again": "火焰升级2再次提升",
    "Fire upgrade 4 is boosted (": "火焰升级 4 增强 (",
    "Fire upgrades 2 and 3 are strongly boosted": "火焰升级 2 和 3 强力提升",
    "Gold multiplies its own gain": "黄金倍增自己的收益",
    "Hover over a challenge to see what it does!": "将鼠标悬停在挑战上，看看它的作用！",
    "Increase platinum gain by 20% (multiplicative)": "铂金收益增加 20%（乘法）",
    "Increase platinum gain tenfold (": "增加铂金增益十倍（",
    "Increase uranium gain by 10% (additive) (": "增加铀增益 10%（加法）（",
    "Keep platinum upgrades on magic reset": "在魔法重置时保持铂金升级",
    "Magic challenges": "魔法挑战",
    "Magic Challenges": "魔法挑战",
    "Magic effect is squared": "魔法效果平方",
    "magic manifolds": "魔法流形",
    "Magic multiplies its own gain": "魔法成倍增长",
    "Magic upgrades 4 and 6 are boosted": "魔法升级 4 和 6 得到提升",
    "Magifold effect is boosted again to (x^8)": "Magifold 效果再次提升至 (x^8)",
    "Magifold effect is boosted from (x^4) to (x^6)": "Magifold 效果从 (x^4) 提升到 (x^6)",
    "Miner cost scales 5% slower (": "矿工成本下降 5% (",
    "Multiply gold and fire gain by 55.5. Waow.": "将黄金和火焰增益乘以 55.5。哇。",
    "Multiply uranium gain by 100": "将铀增益乘以 100",
    "Score gain is increased by ^1.30": "分数增加 ^1.30",
    "Spend time with your dragon": "花时间和你的龙在一起",
    "times, increasing fire gain by ^": "次，增加火焰增益 ^",
    "times, increasing gold gain by ^": "次，增加黄金收益 ^",
    "Triple magic gain again. Easy peasy.": "再次获得三倍魔法增益。十分简单。",
    "Triple magic gain. Simple.": "三倍魔法增益。简单的。",
    "Turns all your score and magifolds into dragon food": "将你所有的分数和magifolds变成龙的食物",
    "Unlock a new platinum upgrade (kept on reset)": "解锁新的铂金升级（保持重置）",
    "Unlock buy max and max all for fire upgrades": "解锁 购买最大 和 全部最大 进行火焰升级",
    "Unlock fire upgrades": "解锁火焰升级",
    "Unlock max all for platinum upgrades": "为铂金升级解锁最大全部",
    "Unlock more magic upgrades": "解锁更多魔法升级",
    "Uranium increases magic gain": "铀增加魔法增益",
    "You are not in any challenges!": "你没有任何挑战！",
    "You are unable to enter challenges for the next 30 seconds": "在接下来的 30 秒内您无法进入挑战",
    "You can select up to 4 challenges, and you will earn separate scores for each amount of challenges you enter at once (1, 2, 3 and 4).": "您最多可以选择 4 个挑战，一次输入的每个挑战（1、2、3 和 4）都将获得单独的分数。",
    "You gain 1 free uranium per second (but only 1)": "您每秒获得 1 个免费铀（但只有 1 个）",
    "You gain 10x as much time spent with your dragon": "你花在龙身上的时间是原来的 10 倍",
    "Elder dragon": "上古巨龙",
    "Your strong and wise dragon friend rests upon your mountain of gold, and defends it with inferno-like breath.": "你强壮而睿智的龙友倚靠在你的金山之上，用地狱般的气息保卫着它。",
    "A1 - Magic fail": "A1 - 魔法失败",
    "A2 - Market crash": "A2 - 市场崩盘",
    "B1 - Freezing": "B1 - 冻结",
    "B2 - Awful alchemy": "B2 - 可怕的炼金术",
    "Dark dragon": "黑暗巨龙",
    "Your menacing dark dragon calls upon the power of the void itself to defend your empire.": "你那凶险的黑暗巨龙召唤虚空本身的力量来保卫你的帝国。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Created by Demonin": "作者 Demonin",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Discord": "Discord",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Multiplies fire gain by ": "倍增火焰增益 ",
    "Challenges active: ": "挑战中：",
    "Fire gain is severely reduced ": "火焰增益被严重减少 ",
    "Gold and platinum gain are severely reduced ": "黄金和铂金收益严重减少 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Platinum upgrade (.+)\'s effect is \/(.+) and gold\/click is always (.+).$/, '白金升级 $1 的效果是\/$2，黄金\/点击总是 $2。'],
    [/^magic effect is (.+) then \/(.+).$/, '魔法效果是 $1 然后 \/ $2'],
    [/^Exit challenges for (.+) score$/, '退出挑战获得 $1 积分'],
    [/^Next magic at (.+) gold$/, '下一个魔法在 $1 黄金'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) challenge:$/, '$1 挑战：'],
    [/^([\d\.,]+) challenges:$/, '$1 挑战：'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Requires (.+) magifolds$/, '需要 $1 magifolds'],
    [/^Costs (.+) gold$/, '成本 $1 黄金'],
    [/^Costs (.+) magic,$/, '成本 $1 魔法，'],
    [/^Costs (.+) magic$/, '成本 $1 魔法'],
    [/^Costs (.+) platinum$/, '成本 $1 铂金'],
    [/^Costs (.+) uranium$/, '成本 $1 铀'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);