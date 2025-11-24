
import React from 'react';

const AssetSixteen: React.FC = () => {
  return (
    <div className="w-[400px] h-[300px] bg-[#0f172a] shadow-xl relative overflow-hidden border border-slate-600 p-0 flex flex-col mx-auto font-mono">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(56, 189, 248, .3) 25%, rgba(56, 189, 248, .3) 26%, transparent 27%, transparent 74%, rgba(56, 189, 248, .3) 75%, rgba(56, 189, 248, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(56, 189, 248, .3) 25%, rgba(56, 189, 248, .3) 26%, transparent 27%, transparent 74%, rgba(56, 189, 248, .3) 75%, rgba(56, 189, 248, .3) 76%, transparent 77%, transparent)', backgroundSize: '30px 30px'}}>
      </div>

      {/* Header */}
      <div className="bg-slate-800 p-3 border-b border-slate-600 flex justify-between items-center z-10">
        <div className="text-[10px] text-cyan-500 font-bold tracking-widest">DELTA-NTU SURVEILLANCE</div>
        <div className="text-[8px] text-red-500 bg-red-900/30 px-2 py-0.5 rounded border border-red-900">PACKET LOSS 47%</div>
      </div>

      <div className="p-6 flex-1 flex flex-col relative z-10 text-slate-300">
        
        {/* Metadata */}
        <div className="text-[9px] space-y-1 mb-4 font-bold text-slate-500">
            <p>SOURCE: BAGHDAD SECTOR 4</p>
            <p>DATE: [REDACTED] 2003</p>
            <p>TYPE: AUDIO / SPECTRAL</p>
        </div>

        {/* Waveform Visualization */}
        <div className="relative h-24 w-full bg-slate-900/50 border border-slate-700 mb-4 flex items-center overflow-hidden">
             <div className="absolute left-0 h-[1px] w-full bg-slate-600"></div>
             {/* Simulated jagged waveform */}
             <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                <path d="M0,50 L10,40 L20,60 L30,50 L40,50 L50,20 L60,80 L70,50 L90,50 L100,90 L110,10 L120,50 L150,50 L160,50 L170,50 L180,45 L190,55 L200,50 L300,50" 
                      fill="none" stroke="#38bdf8" strokeWidth="1.5" className="opacity-80" />
                 {/* The Anomaly Spike */}
                 <path d="M100,90 L110,10" fill="none" stroke="#ef4444" strokeWidth="2" className="animate-pulse" />
             </svg>
             <span className="absolute top-1 right-1 text-[8px] text-red-500">ANOMALY DETECTED</span>
        </div>

        {/* Transcript */}
        <div className="font-serif text-sm italic text-slate-400 leading-relaxed opacity-80">
            "The shard sings in E-flat minor now. I can feel it synchronizing with my—"
        </div>
        <div className="text-[10px] text-slate-600 mt-1 font-mono">
            [SIGNAL CORRUPTED]
        </div>

      </div>
      
      {/* Glitch Overlay */}
      <div className="absolute bottom-10 left-0 w-full h-2 bg-slate-500/10 mix-blend-color-dodge"></div>
    </div>
  );
};

export default AssetSixteen;
