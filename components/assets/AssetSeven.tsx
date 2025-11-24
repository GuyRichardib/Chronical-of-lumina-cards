
import React from 'react';

const AssetSeven: React.FC = () => {
  return (
    <div className="w-[400px] h-[400px] bg-[#2a2a2a] shadow-2xl relative overflow-hidden border-4 border-[#1a1a1a] p-0 flex flex-col items-center justify-center mx-auto">
      {/* Dark texture background representing the niche behind the mirror */}
      <div className="absolute inset-0 opacity-30" 
           style={{backgroundImage: 'radial-gradient(circle, #4a4a4a 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
      </div>

      {/* The Note */}
      <div className="relative w-64 h-48 bg-[#fcfbf9] shadow-lg transform rotate-2 p-6 flex flex-col items-center justify-center z-10 border border-slate-300">
        {/* Tape strip */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-100/80 shadow-sm -rotate-1 opacity-90"></div>
        
        <p className="font-handwriting text-3xl text-slate-800 text-center leading-tight">
          The mind is a lock.<br/>
          Find the door beneath<br/>
          the Rotunda.
        </p>
        
        <div className="mt-6 w-full border-t border-slate-200 pt-2 flex justify-between items-end">
           <div className="flex flex-col">
             <span className="text-[6px] font-mono text-slate-400 uppercase">Access Code</span>
             <span className="text-[10px] font-mono text-slate-600">AA-3F-19</span>
           </div>
           <span className="font-handwriting text-xl text-slate-600">N.D.</span>
        </div>
      </div>

      {/* The Key Visual - CSS constructed */}
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 drop-shadow-2xl hover:scale-105 transition-transform duration-500">
        {/* Key Head */}
        <div className="w-14 h-14 rounded-full border-[6px] border-amber-600 bg-[#2a2a2a] shadow-inner flex items-center justify-center relative">
           <div className="w-10 h-10 rounded-full border-[2px] border-amber-700/50"></div>
           <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 rounded-full"></div>
        </div>
        {/* Key Shaft */}
        <div className="w-4 h-32 bg-gradient-to-b from-amber-600 via-amber-500 to-amber-800 mx-auto -mt-1 shadow-lg"></div>
        {/* Key Teeth */}
        <div className="absolute bottom-6 right-[-12px] w-5 h-4 bg-amber-700 rounded-r-sm"></div>
        <div className="absolute bottom-2 right-[-12px] w-6 h-3 bg-amber-700 rounded-r-sm"></div>
      </div>

      {/* Light reflection on the "darkness" */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-900/20 to-transparent pointer-events-none mix-blend-screen"></div>
    </div>
  );
};

export default AssetSeven;
