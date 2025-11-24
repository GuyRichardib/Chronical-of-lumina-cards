
import React from 'react';

const AssetFourteen: React.FC = () => {
  return (
    <div className="w-[400px] h-[600px] bg-white shadow-2xl relative overflow-hidden p-0 flex flex-col mx-auto border border-slate-300">
      
      {/* Header: Sterile Medical */}
      <div className="bg-slate-100 p-6 border-b border-slate-200">
         <div className="flex justify-between items-center">
            <h2 className="font-sans font-bold text-slate-800 text-lg tracking-tight">GRADY MEMORIAL</h2>
            <span className="text-[9px] font-mono bg-black text-white px-1 py-0.5">AURA WARD</span>
         </div>
         <p className="font-mono text-[10px] text-slate-500 mt-1">NEURO-SYNAPTIC INTEGRATION CONSENT</p>
      </div>

      <div className="p-8 flex-1 flex flex-col">
         
         {/* The Creed */}
         <div className="mb-8">
            <p className="text-[10px] uppercase text-slate-400 font-bold mb-2">PATIENT DECLARATION</p>
            <blockquote className="font-serif text-sm text-slate-800 italic leading-relaxed border-l-2 border-slate-300 pl-4 py-1">
                "I, Elena Voss, enter Integration willingly. I surrender curated grief to the ledger in exchange for custodianship of the Atlas network. I accept that every debt must be paid twice: once in memory, once in marrow."
            </blockquote>
         </div>

         {/* Data Grid */}
         <div className="grid grid-cols-2 gap-4 text-[10px] font-mono mb-8 bg-slate-50 p-4 border border-slate-100">
            <div className="flex flex-col gap-1">
                <span className="text-slate-400">PROCEDURE ID</span>
                <span className="font-bold">ORPHIC-47</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-slate-400">EST. REWRITE</span>
                <span className="font-bold text-red-600">9 SECONDS</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-slate-400">RETURN PROBABILITY</span>
                <span className="font-bold">78%</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-slate-400">STATUS</span>
                <span className="font-bold text-blue-600 animate-pulse">ACTIVE</span>
            </div>
         </div>

         {/* Signatures */}
         <div className="mt-auto space-y-6">
            <div className="relative">
                <span className="text-[8px] uppercase text-slate-400 block mb-1">Clinician</span>
                <span className="font-handwriting text-lg text-slate-600">Dr. Makayla Zhou</span>
                <div className="w-full h-px bg-slate-200 mt-1"></div>
            </div>
            <div className="relative">
                <span className="text-[8px] uppercase text-slate-400 block mb-1">Architect</span>
                <span className="font-serif text-xl text-black italic">Aurelius Lorne</span>
                <div className="w-full h-px bg-slate-200 mt-1"></div>
            </div>
            <div className="relative">
                <span className="text-[8px] uppercase text-slate-400 block mb-1">Paradox Witness</span>
                {/* Thumbprint visual */}
                <div className="absolute left-0 -top-2 w-10 h-12 border-2 border-slate-800/10 rounded-sm bg-slate-800/5 flex items-center justify-center">
                     <div className="w-6 h-8 rounded-full border border-slate-400 opacity-20" style={{background: 'repeating-radial-gradient(circle, #000, #000 1px, transparent 1px, transparent 4px)'}}></div>
                </div>
                <span className="font-mono text-xs ml-14 text-slate-500">[BIOMETRIC SIGNATURE: ARIANE SOREL]</span>
                <div className="w-full h-px bg-slate-200 mt-1"></div>
            </div>
         </div>

         {/* Countdown Overlay */}
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500/10 font-mono text-6xl font-bold pointer-events-none rotate-45 border-4 border-red-500/10 p-4">
            T-12:48:33
         </div>

      </div>
    </div>
  );
};

export default AssetFourteen;
