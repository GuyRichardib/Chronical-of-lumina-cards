import React from 'react';

const AssetThree: React.FC = () => {
  return (
    <div className="w-[400px] h-[300px] bg-paper-100 shadow-xl relative border-4 border-double border-slate-800 p-8 flex flex-col justify-center mx-auto">
      
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-paper-100 px-4 z-10">
         <h3 className="font-serif italic text-slate-800 text-lg">Ledger of Debts</h3>
      </div>

      <div className="grid grid-rows-3 gap-0 border border-slate-800 bg-white">
        
        {/* Row 1: Memory */}
        <div className="grid grid-cols-3 border-b border-slate-800 h-16 items-center">
           <div className="col-span-1 border-r border-slate-800 h-full flex items-center justify-center bg-slate-50">
             <span className="font-mono text-[10px] font-bold tracking-widest text-slate-600">MEMORY</span>
           </div>
           <div className="col-span-2 h-full flex items-center px-4 relative overflow-hidden group">
             <span className="font-serif text-slate-500 text-sm italic relative z-10">Noémie (Sister)</span>
             {/* Scratch out effect */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-2/3 h-[1px] bg-red-800 transform rotate-1 opacity-80"></div>
                <div className="w-2/3 h-[1px] bg-red-800 transform -rotate-1 opacity-80"></div>
             </div>
           </div>
        </div>

        {/* Row 2: Body */}
        <div className="grid grid-cols-3 border-b border-slate-800 h-16 items-center">
           <div className="col-span-1 border-r border-slate-800 h-full flex items-center justify-center bg-slate-50">
             <span className="font-mono text-[10px] font-bold tracking-widest text-slate-600">BODY</span>
           </div>
           <div className="col-span-2 h-full flex flex-col justify-center px-4">
             <span className="font-serif text-slate-800 text-sm font-bold">Alexis</span>
             <span className="font-mono text-[9px] text-slate-400">Status: Coma / Tremor</span>
           </div>
        </div>

        {/* Row 3: Name */}
        <div className="grid grid-cols-3 h-16 items-center">
           <div className="col-span-1 border-r border-slate-800 h-full flex items-center justify-center bg-slate-50">
             <span className="font-mono text-[10px] font-bold tracking-widest text-slate-600">NAME</span>
           </div>
           <div className="col-span-2 h-full flex items-center px-4">
             <div className="w-24 h-3 bg-slate-900 mask-texture"></div>
           </div>
        </div>

      </div>

      <div className="absolute bottom-2 right-2">
         <span className="font-mono text-[8px] text-slate-400">PG. 47</span>
      </div>
    </div>
  );
};

export default AssetThree;