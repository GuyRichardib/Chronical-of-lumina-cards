
import React from 'react';

const AssetNine: React.FC = () => {
  return (
    <div className="w-[400px] h-[550px] bg-white shadow-2xl relative overflow-hidden border-4 border-slate-900 p-0 flex flex-col mx-auto">
      
      {/* Header */}
      <div className="bg-slate-900 text-white p-4 text-center border-b-4 border-double border-white z-20">
        <h1 className="font-serif text-2xl tracking-widest font-bold">TRIBUNAL EXHIBIT A</h1>
        <p className="text-[9px] font-mono uppercase text-slate-400 mt-1">Hearing 47 • Procedure Delta</p>
      </div>

      <div className="flex-1 flex flex-col relative">
        
        {/* Top Half: Clinical Feed */}
        <div className="flex-1 bg-slate-50 p-6 border-b-2 border-slate-900 relative">
           <span className="absolute top-3 left-3 text-[9px] font-bold uppercase bg-blue-100 text-blue-900 px-2 py-0.5 border border-blue-200">Clinical Feed</span>
           
           <div className="h-full flex flex-col justify-center items-center">
              {/* ECG Line */}
              <div className="w-full h-32 flex items-center relative bg-white border border-slate-200 rounded-md overflow-hidden">
                 {/* Grid lines */}
                 <div className="absolute inset-0 opacity-10" 
                      style={{backgroundImage: 'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)', backgroundSize: '10px 10px'}}>
                 </div>
                 
                 <svg className="w-full h-full relative z-10" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <path d="M0,50 L40,50 L50,10 L60,90 L70,50 L100,50 L110,50 L200,50 L300,50" 
                          fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                 </svg>
                 
                 <div className="absolute right-4 top-4 text-red-600 font-mono text-lg font-bold animate-pulse bg-white/80 px-1">
                    FLATLINE
                 </div>
              </div>
              <div className="w-full flex justify-between text-[10px] font-mono text-slate-500 mt-3 px-1">
                 <span className="font-bold">HR: 0 BPM</span>
                 <span className="font-bold">SAT: 0%</span>
                 <span>TIME: 14:06</span>
              </div>
           </div>
        </div>

        {/* Middle Divider with Label */}
        <div className="h-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 flex items-center justify-center relative z-10">
            <span className="text-[8px] text-white font-mono uppercase tracking-[0.3em]">Reality Divergence Point</span>
        </div>

        {/* Bottom Half: Matrix Observation */}
        <div className="flex-1 bg-[#1a1a1a] p-6 relative overflow-hidden">
           <span className="absolute top-3 left-3 text-[9px] font-bold uppercase bg-amber-900 text-amber-100 px-2 py-0.5 border border-amber-700 z-20">Matrix Feed</span>
           
           <div className="h-full flex flex-col justify-center items-center relative z-10">
              {/* Glowing Sphere */}
              <div className="w-32 h-32 rounded-full border-2 border-amber-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.2)] relative">
                 <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-ping" style={{animationDuration: '3s'}}></div>
                 <div className="w-20 h-20 bg-gradient-to-br from-amber-300 to-amber-700 rounded-full opacity-90 shadow-inner"></div>
                 {/* Reflection shine */}
                 <div className="absolute top-6 left-8 w-6 h-3 bg-white/40 rounded-full transform -rotate-45 blur-[2px]"></div>
              </div>
              
              <div className="mt-6 text-center">
                 <p className="text-amber-400 font-serif italic text-xl">"Cause Acknowledged"</p>
                 <p className="text-[10px] text-slate-500 font-mono uppercase mt-2 tracking-widest">Balance of Consequences: Active</p>
              </div>
           </div>

           {/* Background particles */}
           <div className="absolute inset-0 opacity-20" 
                style={{backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '15px 15px'}}>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AssetNine;
