import React from 'react';

const AssetFive: React.FC = () => {
  return (
    <div className="w-[400px] h-[550px] bg-paper-50 shadow-xl relative p-0 border border-slate-200 flex flex-col mx-auto">
      
      {/* Top Torn Edge Effect */}
      <div className="h-4 w-full bg-[#e5e5e5]" style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 95% 40%, 90% 100%, 85% 60%, 80% 100%, 75% 30%, 70% 100%, 65% 50%, 60% 100%, 55% 20%, 50% 100%, 45% 60%, 40% 100%, 35% 40%, 30% 100%, 25% 50%, 20% 100%, 15% 30%, 10% 100%, 5% 70%, 0% 100%)'}}></div>

      <div className="p-8 flex-1 flex flex-col items-center relative">
         <div className="absolute inset-0 opacity-[0.03] bg-noise pointer-events-none"></div>

         <h2 className="font-handwriting text-4xl text-slate-800 mb-2 mt-4">The Rose Clock</h2>
         <p className="font-mono text-[9px] text-slate-400 uppercase tracking-[0.2em] mb-10">Calibration Schematic RC-1</p>

         {/* The Clock Visual */}
         <div className="relative w-56 h-56 mb-12">
            {/* Outer Circle */}
            <div className="absolute inset-0 border border-slate-300 rounded-full"></div>
            <div className="absolute inset-1 border border-slate-100 rounded-full"></div>
            
            {/* Inner Circle */}
            <div className="absolute inset-4 border-4 border-double border-slate-800 rounded-full flex items-center justify-center bg-white">
               {/* Center Dot */}
               <div className="w-2.5 h-2.5 bg-slate-800 rounded-full z-20 shadow-sm"></div>
               
               {/* Hands */}
               <div className="absolute w-[2px] h-24 bg-rose-800 top-4 left-1/2 transform -translate-x-1/2 rotate-45 z-10 origin-bottom mix-blend-multiply opacity-90"></div>
               <div className="absolute w-1.5 h-16 bg-slate-800 top-12 left-1/2 transform -translate-x-1/2 -rotate-12 z-10 origin-bottom"></div>

               {/* The Fracture (Red Line) */}
               <div className="absolute w-full h-[1px] bg-red-600 top-1/2 left-0 transform rotate-12 opacity-60"></div>
               
               {/* Clock Ticks */}
               {[0, 90, 180, 270].map((deg) => (
                  <div key={deg} className="absolute w-1 h-3 bg-slate-300 top-0 left-1/2 origin-[0_96px]" style={{transform: `translateX(-50%) rotate(${deg}deg)`}}></div>
               ))}
            </div>

            {/* Labels around clock */}
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 font-serif text-[10px] italic text-slate-600">North: Silence</span>
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 font-serif text-[10px] italic text-slate-600">South: Memory</span>
            <span className="absolute top-1/2 -right-12 transform -translate-y-1/2 font-serif text-[10px] italic text-slate-400 rotate-90">Entropy</span>
         </div>

         {/* List of Thresholds */}
         <div className="w-full space-y-4 font-mono text-[10px] text-slate-600 border-t border-slate-200 pt-8">
            <div className="flex justify-between items-center group cursor-default">
               <span className="group-hover:text-slate-900 transition-colors">THRESHOLD 1</span>
               <span className="font-bold text-slate-800 border-b border-dotted border-slate-300">WATER (Lake)</span>
            </div>
            <div className="flex justify-between items-center group cursor-default">
               <span className="group-hover:text-slate-900 transition-colors">THRESHOLD 2</span>
               <span className="font-bold text-slate-400 line-through decoration-slate-300">GLASS (Choir)</span>
            </div>
            <div className="flex justify-between items-center group cursor-default">
               <span className="group-hover:text-slate-900 transition-colors">THRESHOLD 3</span>
               <span className="font-bold text-slate-900 bg-slate-100 px-1">VOID (Tribunal)</span>
            </div>
         </div>

         {/* Bottom Note */}
         <div className="mt-auto w-full text-right pt-6">
            <p className="font-handwriting text-3xl text-rose-800 transform -rotate-2 inline-block">5/4</p>
            <p className="text-[8px] font-mono text-slate-400 uppercase tracking-widest mt-1">Rhythm Confirmed</p>
         </div>
      </div>
    </div>
  );
};

export default AssetFive;