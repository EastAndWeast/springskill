import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BellRing, ShieldAlert, ZapOff } from 'lucide-react';

const REASONS = [
    "小李刚打电话，说我的车在楼下被别人刮了，我得赶紧下去看录像！",
    "物业刚发微信，说我们那个单元停水/漏水/电表报警了，让我回去确认一下！",
    "糟了，老总刚才在群里艾特全员，说线上服务器有个紧急 Bug 要配合处理，我得去找个安静的地方回电话。",
    "刚才我妈/媳妇/老公发信息，让我立刻去超市买点东西急用，晚了超市关门了！",
    "哎呀肚子突然贼疼，可能刚才吃太凉了，借洗手间一用（可以躲半小时）。"
];

export default function EscapeModule() {
    const [excuse, setExcuse] = useState(null);
    const [loading, setLoading] = useState(false);

    const generateExcuse = () => {
        setLoading(true);
        setExcuse(null);
        let randIndex = Math.floor(Math.random() * REASONS.length);
        setTimeout(() => {
            setExcuse(REASONS[randIndex]);
            setLoading(false);
        }, 600); // 模拟一点延迟增加真实感
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full items-center justify-center space-y-8 py-10"
        >
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-black text-slate-800">社交电量 1%</h2>
                <p className="text-sm text-slate-500">需要一个完美借口脱身？按下按钮！</p>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={generateExcuse}
                disabled={loading}
                className="relative w-48 h-48 rounded-full bg-gradient-to-br from-rose-500 to-red-600 shadow-[0_20px_50px_-10px_rgba(225,29,72,0.6)] flex flex-col items-center justify-center text-white border-4 border-rose-300 disabled:opacity-50"
            >
                <ZapOff size={48} className="mb-2" />
                <span className="font-bold tracking-widest text-lg">紧急逃生</span>

                {/* 脉冲伪装效果 */}
                <div className="absolute w-full h-full rounded-full border border-rose-400 animate-ping opacity-75" />
            </motion.button>

            <div className="w-full h-32 px-5">
                <AnimatePresence mode="wait">
                    {loading && (
                        <motion.p key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center text-slate-400 font-bold mt-10">
                            正在连通火星救援总部...
                        </motion.p>
                    )}

                    {excuse && !loading && (
                        <motion.div
                            key="result"
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            className="bg-white p-5 rounded-2xl shadow-lg border border-rose-100 flex gap-4 items-start relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <ShieldAlert size={64} />
                            </div>
                            <div className="bg-rose-100 p-2 rounded-xl shrink-0">
                                <BellRing size={20} className="text-rose-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-rose-500 mb-1">照着念，底气要足：</p>
                                <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                                    "{excuse}"
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
