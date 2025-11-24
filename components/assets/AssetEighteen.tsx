
import React from 'react';

const AssetEighteen: React.FC = () => {
  return (
    <div className="w-[400px] h-[550px] bg-stone-50 shadow-xl relative overflow-hidden p-8 flex flex-col items-center mx-auto font-sans">
      
      {/* Background Wall Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(#a8a29e 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
      </div>

      {/* The Note */}
      <div className="relative w-full bg-[#fffdf5] shadow-md p-6 transform -rotate-1 border border-yellow-100/50">
         {/* Tape */}
         <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-yellow-200/80 opacity-80 rotate-1"></div>

         <h2 className="font-mono text-xs font-bold text-slate-400 uppercase mb-4">STAIRWELL PROTOCOL</h2>
         
         <div className="font-handwriting text-2xl text-slate-800 space-y-4 leading-relaxed">
            <p>Pair bucket with rail.</p>
            <p>Breathe <span className="font-bold text-3xl">2-2-3</span> when tempers rise.</p>
            <p>If it doesn't work, write that down.</p>
            <p>If it does, <span className="underline decoration-wavy decoration-slate-400">don't brag</span>.</p>
         </div>

         <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center">
            <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            </div>
            <span className="font-mono text-[8px] text-slate-400">PRACTICE OVER PROGRAMME</span>
         </div>
      </div>

      {/* The Sticker */}
      <div className="mt-12 relative group">
         <div className="w-24 h-12 bg-orange-600 rounded-sm flex items-center justify-center shadow-lg transform rotate-2 border-2 border-white/20">
            <span className="text-white font-black tracking-widest text-sm">HINGE</span>
         </div>
         <div className="absolute -bottom-6 left-0 w-full text-center">
            <span className="font-mono text-[8px] text-slate-400">Adhesive Token</span>
         </div>
      </div>
      
      {/* Chalk Dust Effect */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/40 blur-2xl rounded-full pointer-events-none"></div>

    </div>
  );
};

export default AssetEighteen;
