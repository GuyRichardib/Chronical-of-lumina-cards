
import React from 'react';

const AssetFifteen: React.FC = () => {
  return (
    <div className="w-[400px] h-[400px] bg-black shadow-2xl relative overflow-hidden p-0 flex flex-col mx-auto font-mono text-white">
      
      {/* Background Chaos */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
         <div className="absolute top-0 left-0 text-[8px] text-green-500 leading-none whitespace-pre opacity-50">
            {`03:07:00 03:07:00 03:07:00 03:07:00\n`.repeat(20)}
         </div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
         
         {/* The Time */}
         <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-white to-blue-400 mb-8 tracking-tighter animate-pulse">
            03:07:00
         </h1>

         {/* The Convergence Triangle */}
         <div className="relative w-full h-40 mb-8">
             
             {/* Top: Rome */}
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center w-full">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">ROME</p>
                <p className="text-sm font-serif italic text-amber-100">"The Notes"</p>
                <div className="w-px h-10 bg-gradient-to-b from-amber-500 to-transparent mx-auto mt-1"></div>
             </div>

             {/* Bottom Left: Atlanta */}
             <div className="absolute bottom-0 left-0 text-left">
                <div className="w-px h-10 bg-gradient-to-t from-rose-500 to-transparent mx-auto mb-1"></div>
                <p className="text-sm font-serif italic text-rose-100">"The Cost"</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">ATLANTA</p>
             </div>

             {/* Bottom Right: Paris */}
             <div className="absolute bottom-0 right-0 text-right">
                <div className="w-px h-10 bg-gradient-to-t from-blue-500 to-transparent mx-auto mb-1"></div>
                <p className="text-sm font-serif italic text-blue-100">"The Rhythm"</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">PARIS</p>
             </div>

             {/* Connecting Lines (CSS) */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
                 <div className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 border border-white/40 rounded-full"></div>
                 </div>
             </div>
         </div>

         {/* The Result */}
         <div className="text-center space-y-2 border-t border-white/20 pt-6 w-full">
            <p className="text-xs text-slate-400 font-bold">SYSTEM STATUS: UNIFIED</p>
            <p className="text-lg font-serif italic text-white">"For three seconds, we were not alone."</p>
         </div>

      </div>
    </div>
  );
};

export default AssetFifteen;
