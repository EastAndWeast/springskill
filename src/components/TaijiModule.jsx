import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, Smile, HeartHandshake } from 'lucide-react';

const QA_DATA = [
    {
        q: "工资多少？年终奖发了吗？",
        a1: "也就勉强够咱们天天想着给长辈买点好吃的哈哈。",
        a2: "唉别提了，公司效益不好，正愁着呢，叔/姨你要是手头宽裕拉拔一下我呗！",
    },
    {
        q: "怎么还不生二胎呀？老大一个人多孤单。",
        a1: "确实是，这不是想先把老大这一阵子基础打好嘛，一步步来。",
        a2: "主要是我带老大已经元气大伤了，等我发大财能请两个保姆了立刻生！",
    },
    {
        q: "孩子期末考多少分啊？班级排第几？",
        a1: "哎哟，现在学校都不强制公开排名了，只管素质教育，健康最重要。",
        a2: "考得没有当年叔/姨家哥哥姐姐好，随我了，只求平安喜乐了！",
    },
    {
        q: "买了几套房了？也不张罗着换个大的？",
        a1: "现在行情在变，先捂着钱包观望观望，还是您的房子好，地段绝佳。",
        a2: "太涨了买不起啦，刚好这阵子断舍离，房子小不用怎么收拾也挺舒服的。",
    }
];

export default function TaijiModule() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mode, setMode] = useState('eq'); // 'eq' = 高情商敷衍, 'humor' = 幽默化解

    const currentQA = QA_DATA[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % QA_DATA.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
        >
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-2">
                    防身太极拳 <span className="text-sm font-normal text-slate-400">/ 避免内耗</span>
                </h2>
                <p className="text-sm text-slate-500 mb-6">不正面刚，不接情绪，永远用对方最舒服的方式结束对话。</p>

                {/* 策略切换 */}
                <div className="flex bg-slate-100 p-1 rounded-full mb-6 relative">
                    <div
                        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-transform duration-300"
                        style={{ transform: mode === 'eq' ? 'translateX(0)' : 'translateX(100%)' }}
                    />
                    <button
                        onClick={() => setMode('eq')}
                        className={`flex-1 flex justify-center items-center gap-1 py-2 text-sm font-bold z-10 transition-colors ${mode === 'eq' ? 'text-rose-600' : 'text-slate-500'}`}
                    >
                        <HeartHandshake size={16} /> 高情商敷衍
                    </button>
                    <button
                        onClick={() => setMode('humor')}
                        className={`flex-1 flex justify-center items-center gap-1 py-2 text-sm font-bold z-10 transition-colors ${mode === 'humor' ? 'text-amber-500' : 'text-slate-500'}`}
                    >
                        <Smile size={16} /> 幽默化解
                    </button>
                </div>

                {/* 卡片内容 */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex + mode}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="min-h-[160px] bg-slate-50 rounded-2xl p-5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-rose-400" />

                        <p className="text-xs font-bold text-slate-400 mb-2">当亲戚问...</p>
                        <p className="text-lg font-bold text-slate-800 mb-4">{currentQA.q}</p>

                        <p className="text-xs font-bold text-slate-400 mb-2">你应该回答...</p>
                        <p className="text-md text-slate-700 font-medium">
                            {mode === 'eq' ? currentQA.a1 : currentQA.a2}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* 刷新按钮 */}
                <button
                    onClick={handleNext}
                    className="w-full mt-4 flex items-center justify-center gap-2 py-4 bg-slate-800 text-white rounded-2xl font-bold active:scale-95 transition-transform"
                >
                    <RefreshCcw size={18} />
                    换个问题防御
                </button>
            </div>
        </motion.div>
    );
}
