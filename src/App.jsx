import React, { useState } from 'react';
import { Shield, Baby, Zap, Gift } from 'lucide-react';
import TaijiModule from './components/TaijiModule';
import KidsModule from './components/KidsModule';
import EscapeModule from './components/EscapeModule';
import RedPacketModule from './components/RedPacketModule';

export default function App() {
  const [activeTab, setActiveTab] = useState('taiji');

  const tabs = [
    { id: 'taiji', label: '太极拳', icon: <Shield size={22} /> },
    { id: 'kids', label: '耗神兽', icon: <Baby size={22} /> },
    { id: 'escape', label: '合法摸鱼', icon: <Zap size={22} /> },
    { id: 'redpacket', label: '记红包', icon: <Gift size={22} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'taiji': return <TaijiModule />;
      case 'kids': return <KidsModule />;
      case 'escape': return <EscapeModule />;
      case 'redpacket': return <RedPacketModule />;
      default: return <TaijiModule />;
    }
  };

  return (
    <div className="flex flex-col h-[100dvh] max-w-md mx-auto bg-slate-50 relative overflow-hidden font-sans shadow-2xl sm:border-x sm:border-slate-200">
      {/* Header */}
      <header className="pt-12 pb-4 px-6 bg-white shadow-sm z-10 flex-none rounded-b-3xl">
        <h1 className="text-2xl font-black bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent tracking-tight">
          春节续命指南
        </h1>
        <p className="text-xs text-slate-400 mt-1 font-medium">保卫你的电量，优雅过个好年</p>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-28 p-5 hide-scrollbar relative">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-100 rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.08)] z-50">
        <div className="flex justify-around items-center h-20 px-4 pb-safe">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center p-2 w-16 transition-all duration-300 outline-none select-none ${isActive ? 'text-rose-600 -translate-y-1' : 'text-slate-400 hover:text-slate-600'
                  }`}
              >
                <div className={`p-3 rounded-2xl transition-all duration-300 ${isActive ? 'bg-rose-50 shadow-inner' : ''}`}>
                  {tab.icon}
                </div>
                <span className={`text-[10px] mt-1 font-bold transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 h-0 hidden'}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
