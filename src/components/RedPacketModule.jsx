import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Wallet, Activity, Plus } from 'lucide-react';

export default function RedPacketModule() {
    const [records, setRecords] = useState([]);
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('give'); // 'give' | 'receive'

    useEffect(() => {
        const saved = localStorage.getItem('redpacket_records');
        if (saved) {
            setRecords(JSON.parse(saved));
        } else {
            setRecords([
                { id: 1, type: 'give', name: '表侄子小明', amount: 200, date: new Date().toLocaleDateString() },
                { id: 2, type: 'receive', name: '大伯给儿子', amount: 500, date: new Date().toLocaleDateString() }
            ]);
        }
    }, []);

    useEffect(() => {
        if (records.length > 0) {
            localStorage.setItem('redpacket_records', JSON.stringify(records));
        }
    }, [records]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (!amount || !name) return;

        const newRecord = {
            id: Date.now(),
            type,
            name,
            amount: Number(amount),
            date: new Date().toLocaleDateString()
        };

        setRecords([newRecord, ...records]);
        setAmount('');
        setName('');
    };

    const totalGive = records.filter(r => r.type === 'give').reduce((sum, r) => sum + r.amount, 0);
    const totalReceive = records.filter(r => r.type === 'receive').reduce((sum, r) => sum + r.amount, 0);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            {/* 统计区 */}
            <div className="flex gap-4">
                <div className="flex-1 bg-gradient-to-br from-rose-500 to-rose-600 outline outline-4 outline-rose-100 p-5 rounded-3xl text-white relative overflow-hidden shadow-lg shadow-rose-200">
                    <div className="absolute -top-4 -right-4 opacity-20">
                        <Gift size={96} />
                    </div>
                    <p className="text-sm font-medium opacity-90 mb-1">已发出 (元)</p>
                    <p className="text-3xl font-black">{totalGive}</p>
                </div>

                <div className="flex-1 bg-gradient-to-br from-amber-400 to-amber-500 outline outline-4 outline-amber-100 p-5 rounded-3xl text-white relative overflow-hidden shadow-lg shadow-amber-200">
                    <div className="absolute -top-4 -right-4 opacity-20">
                        <Wallet size={96} />
                    </div>
                    <p className="text-sm font-medium opacity-90 mb-1">已收到 (元)</p>
                    <p className="text-3xl font-black">{totalReceive}</p>
                </div>
            </div>

            {/* 录入表单 */}
            <form onSubmit={handleAdd} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">记一笔 <Activity size={16} className="text-slate-400" /></h3>

                <div className="flex bg-slate-100 p-1 rounded-2xl relative">
                    <div
                        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-xl shadow-sm transition-transform duration-300"
                        style={{ transform: type === 'give' ? 'translateX(0)' : 'translateX(100%)' }}
                    />
                    <button
                        type="button"
                        onClick={() => setType('give')}
                        className={`flex-1 py-3 text-sm font-bold z-10 transition-colors ${type === 'give' ? 'text-rose-600' : 'text-slate-500'}`}
                    >发红包</button>
                    <button
                        type="button"
                        onClick={() => setType('receive')}
                        className={`flex-1 py-3 text-sm font-bold z-10 transition-colors ${type === 'receive' ? 'text-amber-600' : 'text-slate-500'}`}
                    >收压岁钱</button>
                </div>

                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="谁/给谁"
                        value={name} onChange={e => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl text-sm font-semibold focus:outline-rose-500"
                    />
                    <div className="relative w-full">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">¥</span>
                        <input
                            type="number"
                            placeholder="金额"
                            value={amount} onChange={e => setAmount(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 p-4 pl-10 rounded-2xl text-sm font-bold focus:outline-rose-500"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={!amount || !name}
                    className="w-full bg-slate-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform disabled:opacity-50"
                >
                    <Plus size={18} /> 添加记录
                </button>
            </form>

            {/* 记录列表 */}
            <div className="space-y-3 pb-4">
                <h3 className="font-bold text-slate-800 text-sm ml-2">近期流水</h3>
                {records.length > 0 ? records.map(record => (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={record.id}
                        className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between"
                    >
                        <div>
                            <p className="font-bold text-slate-800">{record.name}</p>
                            <p className="text-[10px] text-slate-400 font-bold">{record.date}</p>
                        </div>
                        <p className={`font-black text-lg ${record.type === 'give' ? 'text-rose-500' : 'text-amber-500'}`}>
                            {record.type === 'give' ? '-' : '+'}{record.amount}
                        </p>
                    </motion.div>
                )) : (
                    <p className="text-center text-sm text-slate-400 py-4">暂无记录，今年是个好年！</p>
                )}
            </div>
        </motion.div>
    );
}
