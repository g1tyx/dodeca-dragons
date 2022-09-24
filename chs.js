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
    "(magifolds), which give": "（Magifolds），它给",
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
    "Gain 20% more gold/second (": "每秒多获得 20% 的金币 (",
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
    "Age your dragon into an adult": "让你的龙长大",
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