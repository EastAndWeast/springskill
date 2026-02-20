import React from 'react';
import { motion } from 'framer-motion';
import { Play, Coffee, Gamepad2, PenTool } from 'lucide-react';

const TASKS = [
    { title: "“财神送福”跑腿大作战", desc: "给孩子分配一筐砂糖橘或糖果，规定每发给长辈一颗，长辈就要给出一句新年祝福语并盖章（或者给个小贴纸），集齐10个兑换超级红包。消耗精力：⭐⭐⭐⭐", icon: <Play size={24} className="text-rose-500" />, color: "bg-rose-50" },
    { title: "低成本寻宝游戏", desc: "把几个小红包或零食藏在客厅沙发缝或角落。画一张极其抽象的“藏宝图”给孩子，告诉他这是先人留下的宝藏。能拖延至少40分钟。消耗精力：⭐⭐⭐⭐⭐", icon: <PenTool size={24} className="text-emerald-500" />, color: "bg-emerald-50" },
    { title: "平板/Switch 神器", desc: "虽然不提倡看电子产品，但特殊时期特事特办，备好《马里奥赛车》或者高质量动物世界纪录片，能保证安静一整小时。", icon: <Gamepad2 size={24} className="text-blue-500" />, color: "bg-blue-50" },
    { title: "大红纸+墨水：乱写艺术", desc: "给他们水彩笔或毛笔，要求每人画一个“福”字或者自己想象的春联，画完统一张贴。只要你不怕脏，这招堪称清净神器。", icon: <PenTool size={24} className="text-purple-500" />, color: "bg-purple-50" },
    { title: "零成本折纸角", desc: "打印几十张不同难度的折纸图解，准备一叠彩纸，比赛谁折的纸飞机飞得远。完全不需要大人参与，只需要最后点评（发糖）。", icon: <Play size={24} className="text-amber-500" />, color: "bg-amber-50" },
    { title: "“小小摄影师”任务", desc: "把旧手机/不用的微单给孩子，让他全权负责拍今天的长辈合照和年夜饭，赋予其强大的使命感。他会忙着让大人摆Pose，无暇缠你。", icon: <Play size={24} className="text-cyan-500" />, color: "bg-cyan-50" },
    { title: "纸杯搭高塔", desc: "准备50个一次性无毒纸杯。告诉他们谁能搭出最高的金字塔而不倒，就可以拿到最高额的刮刮乐。极其考验耐心，耗时巨大。", icon: <Coffee size={24} className="text-orange-500" />, color: "bg-orange-50" },
    { title: "家庭春晚导演组", desc: "交给他们一个艰巨的任务：策划晚上的“家庭小春晚”。要求每个人出个节目单并排练，你可以安心地看他们背着你偷偷排练两小时。", icon: <Play size={24} className="text-pink-500" />, color: "bg-pink-50" },
    { title: "给瓜子剥壳大业", desc: "给他们一个小碗，发布任务：谁能最先剥满一碗葵花籽/花生米，就能以此按等比例重量兑换压岁钱。不仅清净，还能得到一碗剥好的瓜子。", icon: <Coffee size={24} className="text-yellow-600" />, color: "bg-yellow-50" },
    { title: "分类整理魔法", desc: "把家里的一大筐混杂的乐高、积木或者玻璃珠倒出来，要求按照颜色、大小精准分类到不同盒子里。这个动作出奇地解压且极其耗时。", icon: <Gamepad2 size={24} className="text-indigo-500" />, color: "bg-indigo-50" },
    { title: "静音默契大挑战", desc: "宣布“木头人”游戏开始，或者“谁先发出声音谁就输一半压岁钱”的比赛。大人可以借此闭目养神至少十分钟以上。", icon: <Play size={24} className="text-slate-500" />, color: "bg-slate-100" },
    { title: "找茬大王", desc: "提前下载打印或在平板上准备好极高难度的“找不同”图片合集，告诉他们找出所有不同才能吃桌上的特定大餐。", icon: <PenTool size={24} className="text-teal-500" />, color: "bg-teal-50" },
    { title: "旧杂志拼贴画", desc: "废旧的广告单、旧杂志加上安全剪刀和胶水，让他们自己剪下来拼贴成一幅“新年画”。唯一需要的是别剪到真钞票就行。", icon: <PenTool size={24} className="text-fuchsia-500" />, color: "bg-fuchsia-50" },
    { title: "剥砂糖橘连体术", desc: "比赛谁能把砂糖橘的皮剥成最完整、一整条不断裂的形状。这个极其需要耐心和细微的动作控制，很能消磨时光。", icon: <Coffee size={24} className="text-orange-400" />, color: "bg-orange-50" },
    { title: "家庭卫生视察员", desc: "给他们戴上白手套，手里拿个小抹布，告诉他们今天是“家庭卫生视察员”，发现长辈衣服上有灰尘可以去帮忙拍（抹）掉。", icon: <Play size={24} className="text-sky-500" />, color: "bg-sky-50" },
    { title: "读心术大考验", desc: "让孩子们猜测大人心里想的数字（1-100），大人只需要躺在沙发上偶尔说“大了”或者“小了”。完美实现躺平零输出互动。", icon: <Gamepad2 size={24} className="text-violet-500" />, color: "bg-violet-50" },
    { title: "纸巾盒抽盲盒", desc: "在一个空纸巾盒里面放入各种奇怪的小玩意（硬币、糖、小纸条），让他们伸手进去摸，猜中了才能拿走。", icon: <Play size={24} className="text-emerald-400" />, color: "bg-emerald-50" },
    { title: "猜灯谜/脑筋急转弯大逃杀", desc: "从网上下好50个脑筋急转弯，打印出来贴在墙上。孩子们每答对一个奖励一粒花生。你只需要做毫无感情的判官。", icon: <PenTool size={24} className="text-amber-600" />, color: "bg-amber-100" },
    { title: "硬币塔防游戏", desc: "准备一把一角和一元的硬币。任务：谁能把硬币叠得最高而不倒？一次掉落直接退位重来。安静又紧张的氛围瞬间拉满。", icon: <Coffee size={24} className="text-zinc-500" />, color: "bg-zinc-100" },
    { title: "充当长辈按摩仪", desc: "告知孩子：今天的新年任务是给所有腰酸背痛的大人们捶背，捶背服务超过5分钟的可以获得特殊表彰证明。顺便造福你和长辈。", icon: <Play size={24} className="text-rose-400" />, color: "bg-rose-100" },
    { title: "春联找错别字", desc: "跟他们说村/小区里贴的春联有一个字写错了，让他们下楼去每家每户找找看。不仅能释放体力，还能出门吹吹冷空气。", icon: <PenTool size={24} className="text-blue-600" />, color: "bg-blue-100" },
    { title: "塑料瓶保龄球", desc: "把喝完的空饮料瓶倒点水稳住重心，在家里的走廊上扔橘子当保龄球打。声音不大但胜在竞技性强，能让他们玩很久。", icon: <Gamepad2 size={24} className="text-lime-500" />, color: "bg-lime-50" },
    { title: "家庭好声音海选", desc: "给手机录音机打开，跟他们说要选拔去北京录音的资格，让他们自己对着手机唱/讲故事，你只需要在最后重放点评即可。", icon: <Play size={24} className="text-pink-600" />, color: "bg-pink-100" },
    { title: "筷子夹绿豆", desc: "终极物理引擎杀手：放两碗，一侧放满绿豆/红豆，要求用筷子一粒粒夹到另一个碗里，计时间比赛。心不静则手抖，磨练心性绝佳。", icon: <Coffee size={24} className="text-teal-600" />, color: "bg-teal-100" }
];

export default function KidsModule() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-2">
                    神兽放电仪 ⚡
                </h2>
                <p className="text-sm text-slate-500 mb-6">最低成本、零血压上升的带娃解决方案，让他们自己玩，你负责休息。</p>

                <div className="space-y-4">
                    {TASKS.map((task, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-5 rounded-2xl ${task.color} border border-slate-100 flex gap-4 items-start`}
                        >
                            <div className="bg-white p-3 rounded-2xl shadow-sm">
                                {task.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-800 mb-1">{task.title}</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">{task.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300 flex items-center gap-3">
                    <div className="p-2 bg-slate-200 rounded-full">
                        <Coffee size={20} className="text-slate-600" />
                    </div>
                    <p className="text-xs font-semibold text-slate-500">
                        核心原则：能动嘴绝不动手，能用道具绝不陪玩。
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
