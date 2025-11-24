
import React from 'react';

const AssetEleven: React.FC = () => {
  return (
    <div className="w-[400px] h-[250px] bg-[#fdf6e3] shadow-xl relative overflow-hidden border border-amber-200 p-0 flex flex-col mx-auto rounded-sm">
      {/* Background Texture - Warm, nostalgic */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(#d6b48d 0.5px, transparent 0.5px)', backgroundSize: '10px 10px'}}></div>
      
      {/* Grease Stain (Pear Tart) */}
      <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-amber-500/20 rounded-full blur-xl pointer-events-none mix-blend-multiply"></div>

      <div className="p-6 flex-1 flex flex-col relative z-10">
        <div className="flex justify-between items-start border-b-2 border-amber-900/20 pb-2 mb-3">
            <div>
                <h3 className="text-xs font-bold tracking-widest text-amber-900 font-serif">ARCHIVED WITNESS CARD</h3>
                <p className="text-[8px] text-amber-700 font-mono">ATLAS VAULT • SUB-LEVEL 3</p>
            </div>
            <div className="text-right">
                <span className="text-xs font-mono text-amber-800 font-bold">CA-000</span>
            </div>
        </div>

        <div className="flex-1 space-y-3">
            <div className="flex text-[10px] font-serif text-slate-800">
                <span className="w-16 font-bold text-amber-900 uppercase text-[8px] pt-0.5">Subject</span>
                <span>Elena Voss (pre-Integration)</span>
            </div>
            <div className="flex text-[10px] font-serif text-slate-800">
                <span className="w-16 font-bold text-amber-900 uppercase text-[8px] pt-0.5">Memory</span>
                <span className="italic">"She braided my hair in three strands. Said braids keep secrets safe."</span>
            </div>
            <div className="flex text-[10px] font-serif text-slate-800">
                <span className="w-16 font-bold text-amber-900 uppercase text-[8px] pt-0.5">Scent</span>
                <span>Pear tart. Butter crust. Sunday morning.</span>
            </div>
        </div>

        {/* The Warning Note */}
        <div className="mt-auto pt-2">
            <p className="font-handwriting text-red-700 text-sm transform -rotate-1 opacity-80">
                Note: This memory will be the first thing she loses.
            </p>
        </div>
      </div>
      
      {/* Sidebar Color Code */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></div>
    </div>
  );
};

export default AssetEleven;
