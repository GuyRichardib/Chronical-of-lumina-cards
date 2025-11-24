
import React from 'react';

const AssetThirteen: React.FC = () => {
  return (
    <div className="w-[400px] h-[550px] bg-[#1e1b1b] shadow-2xl relative overflow-hidden p-8 flex flex-col mx-auto">
      {/* Texture: Velvet/Dark Paper */}
      <div className="absolute inset-0 opacity-10 bg-noise pointer-events-none"></div>
      
      {/* Hidden Circuitry - SIGMA traces */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(34, 211, 238, .3) 25%, rgba(34, 211, 238, .3) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, .3) 75%, rgba(34, 211, 238, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(34, 211, 238, .3) 25%, rgba(34, 211, 238, .3) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, .3) 75%, rgba(34, 211, 238, .3) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px'}}>
      </div>

      <div className="border-2 border-amber-700/30 h-full p-6 flex flex-col relative z-10">
        
        {/* Title */}
        <div className="text-center mb-8">
            <h1 className="font-serif text-2xl text-amber-500 tracking-widest uppercase">The Pearl Accord</h1>
            <div className="w-32 h-[1px] bg-amber-800 mx-auto mt-2"></div>
            <p className="text-[8px] text-amber-800 mt-1 font-mono">WITNESS MARKET // SUB-BASEMENT 4</p>
        </div>

        {/* Clauses */}
        <div className="space-y-6 font-serif text-sm text-amber-100/80 leading-relaxed">
            <p>
                <span className="text-amber-500 font-bold block text-xs mb-1">CLAUSE I</span>
                Pearl Chorus receives nightly access to Atlas breathing corridors between 02:00 and 02:15.
            </p>
            <p>
                <span className="text-amber-500 font-bold block text-xs mb-1">CLAUSE II</span>
                Architect Elena Voss receives immediate alerts if any ledger hunter approaches the Voss family line.
            </p>
            <p>
                <span className="text-amber-500 font-bold block text-xs mb-1">CLAUSE III</span>
                This accord dissolves immediately if Aurelius Lorne lays claim to either party.
            </p>
        </div>

        {/* Signatures */}
        <div className="mt-auto space-y-4">
            <div className="flex justify-between items-end border-b border-amber-900 pb-2">
                <span className="text-[9px] text-amber-600 uppercase">For Atlas</span>
                <span className="font-handwriting text-xl text-white">Elena Voss</span>
            </div>
            <div className="flex justify-between items-end border-b border-amber-900 pb-2">
                <span className="text-[9px] text-amber-600 uppercase">For Pearl Chorus</span>
                <div className="text-right">
                    <span className="font-serif text-lg text-amber-400 block leading-none">Mother Havel</span>
                    <span className="font-mono text-[8px] text-amber-700">Witness: Vanta</span>
                </div>
            </div>
        </div>

        {/* Hidden Warning */}
        <div className="absolute bottom-2 left-0 w-full text-center">
             <span className="text-[6px] font-mono text-cyan-900 tracking-[0.5em] uppercase opacity-40">Every promise sits on an algorithm</span>
        </div>

      </div>
    </div>
  );
};

export default AssetThirteen;
