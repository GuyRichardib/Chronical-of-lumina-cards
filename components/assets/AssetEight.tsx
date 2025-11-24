
import React from 'react';

const AssetEight: React.FC = () => {
  return (
    <div className="w-[400px] h-[550px] bg-slate-100 shadow-xl relative overflow-hidden border border-slate-400 p-0 flex flex-col mx-auto font-mono">
      
      {/* Header Area */}
      <div className="bg-slate-800 text-white p-6 flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold uppercase tracking-widest font-sans">PROGRAM SILENCE</h2>
          <p className="text-[9px] text-slate-400 mt-1">AUDIT DIVISION • SECTOR 4</p>
        </div>
        <div className="border-2 border-white/30 px-2 py-1 transform rotate-3">
           <span className="text-xs font-bold text-red-400">NON-COMPLIANT</span>
        </div>
      </div>

      <div className="p-8 flex-1 relative">
        {/* Background Stamp */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
           <svg width="300" height="300" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="2" fill="none" />
             <line x1="20" y1="20" x2="80" y2="80" stroke="black" strokeWidth="2" />
             <line x1="80" y1="20" x2="20" y2="80" stroke="black" strokeWidth="2" />
           </svg>
        </div>

        <div className="space-y-6 text-xs text-slate-700">
          <div className="grid grid-cols-2 gap-4 border-b-2 border-slate-300 pb-4">
             <div>
               <span className="block text-[9px] uppercase text-slate-500 mb-1">Subject ID</span>
               <span className="font-bold text-lg">S-J13 (Dumas)</span>
             </div>
             <div className="text-right">
               <span className="block text-[9px] uppercase text-slate-500 mb-1">Incident Time</span>
               <span className="font-bold text-lg">12:58 PM</span>
             </div>
          </div>

          <div className="bg-white p-4 border-l-4 border-red-500 shadow-sm">
             <span className="block text-[9px] uppercase text-red-500 font-bold mb-2">Violation Type</span>
             <p className="mb-1 font-bold">• Unsanctioned Rhythm Propagation</p>
             <p className="">• Olfactory Contamination (Cardamom {'>'} 40ppm)</p>
          </div>

          <div className="space-y-2">
             <span className="block text-[9px] uppercase text-slate-500">Agent Notes</span>
             <div className="leading-relaxed italic bg-slate-50 p-3 border border-slate-200 text-slate-600">
               "Subject attempted to mask deviations with 'family archive' cover story. 
               Wand detected resonant frequencies incompatible with baseline reality. 
               <span className="bg-slate-800 text-white px-1 mx-1 not-italic font-bold">Spiral pattern</span> 
               observed in vocal cadence."
             </div>
          </div>

          <div className="mt-auto pt-6 border-t-2 border-dashed border-slate-300">
             <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold text-slate-500">Action Taken</span>
                <span className="px-3 py-1 bg-slate-800 text-white text-[10px] font-bold rounded uppercase">Warning Issued</span>
             </div>
             <div className="mt-4 text-[9px] text-red-600 text-center font-bold uppercase tracking-wider border border-red-200 bg-red-50 p-2">
                Failure to stabilize will result in forced sedation
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetEight;
