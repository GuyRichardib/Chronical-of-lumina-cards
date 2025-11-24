import React from 'react';

const AssetTwo: React.FC = () => {
  return (
    <div className="w-[400px] h-[600px] bg-[#fffefc] shadow-xl relative overflow-hidden border border-slate-200 p-0 flex flex-col mx-auto">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-noise"></div>

      {/* Header Graphic */}
      <div className="h-4 bg-slate-800 w-full z-10"></div>
      
      <div className="p-8 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-end border-b-2 border-slate-800 pb-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-serif">INTAKE FORM</h1>
            <p className="text-[9px] text-slate-500 uppercase tracking-widest mt-1 font-sans">Horologium Institute • Wing 4</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-mono text-slate-400">ID: 903-H</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6 font-mono text-xs">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase text-slate-400 mb-1 font-sans">Patient Name</span>
              <span className="text-base font-bold text-slate-900 border-b border-slate-200 pb-1 font-serif">HÉLÈNE ROAÉ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase text-slate-400 mb-1 font-sans">Date of Admission</span>
              <span className="text-base text-slate-700 border-b border-slate-200 pb-1">DAY ZERO</span>
            </div>
          </div>

          <div className="bg-slate-50 p-4 border border-slate-100">
            <span className="text-[9px] uppercase text-slate-400 block mb-2 font-sans">Assessment Keywords</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-slate-800 text-[10px] font-bold bg-white">CLINIC</span>
              <span className="px-2 py-1 border border-slate-800 text-[10px] font-bold bg-white">MATRIX</span>
              <span className="px-2 py-1 border border-slate-300 text-[10px] text-slate-500 line-through decoration-slate-400">STABLE</span>
              <span className="px-2 py-1 border border-slate-800 text-[10px] font-bold bg-slate-800 text-white">GLISSADE</span>
            </div>
          </div>

          <div className="flex flex-col">
             <span className="text-[9px] uppercase text-slate-400 mb-2 font-sans">Physician Notes</span>
             <p className="font-serif text-sm italic text-slate-600 leading-relaxed border-l-2 border-slate-200 pl-3">
               Subject reports inability to distinguish between baseline reality and constructed environment. 
               Requesting "Witness Protocol" authorization.
             </p>
          </div>
        </div>

        {/* Signature Section */}
        <div className="mt-auto pt-8 flex justify-between items-end">
           <div className="flex flex-col">
             <span className="text-[8px] uppercase text-slate-400 font-sans">Authorized By</span>
             <span className="font-handwriting text-2xl text-slate-800 transform -rotate-2">Dr. Blackwood</span>
           </div>
           {/* Misfiled Stamp */}
           <div className="border-2 border-red-900 text-red-900 px-3 py-1 font-bold text-sm tracking-widest uppercase opacity-60 transform -rotate-6 mask-texture mix-blend-multiply">
             MISFILED
           </div>
        </div>
      </div>
    </div>
  );
};

export default AssetTwo;