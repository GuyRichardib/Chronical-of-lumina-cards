import React from 'react';

const AssetFour: React.FC = () => {
  return (
    <div className="w-[400px] h-[240px] bg-white rounded-xl shadow-xl relative overflow-hidden border border-slate-300 mx-auto">
      {/* Holographic Strip Simulation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-cyan-100/20 to-transparent pointer-events-none z-20"></div>
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl z-10"></div>
      
      <div className="flex h-full relative z-10">
        {/* Left Color Bar */}
        <div className="w-16 bg-slate-900 flex flex-col items-center justify-center gap-4 text-white z-10">
           <div className="transform -rotate-90 text-[9px] font-bold tracking-widest whitespace-nowrap font-mono text-slate-300">HOROLOGIUM</div>
           <div className="w-1.5 h-10 bg-gradient-to-b from-amber-400 via-orange-500 to-rose-600 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
           <div className="transform -rotate-90 text-[9px] font-bold tracking-widest whitespace-nowrap text-slate-500 font-mono">PROGRAM</div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
           <div className="flex justify-between items-start">
              <div>
                <h2 className="font-sans font-black text-2xl text-slate-900 tracking-tighter">WITNESS</h2>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">Class B • Active Auditor</p>
              </div>
              <div className="border border-slate-200 p-1 rounded bg-slate-50">
                <div className="w-8 h-8 flex items-center justify-center text-slate-400 text-xl font-serif">∞</div>
              </div>
           </div>

           <div className="space-y-3">
              <div className="flex items-baseline gap-3 border-b border-dashed border-slate-100 pb-1">
                 <span className="text-[10px] font-bold text-slate-400 uppercase w-16">Identity</span>
                 <span className="font-mono text-sm text-slate-900 font-bold">ÉLÉANORE DUMAS</span>
              </div>
              <div className="flex items-baseline gap-3 border-b border-dashed border-slate-100 pb-1">
                 <span className="text-[10px] font-bold text-slate-400 uppercase w-16">Anchor</span>
                 <span className="font-mono text-sm text-slate-700">Cardamom / Breath</span>
              </div>
           </div>

           <div className="pt-2">
              <p className="font-handwriting text-xl text-slate-400 opacity-90 transform -rotate-1">
                "Witness, not supplicant."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AssetFour;