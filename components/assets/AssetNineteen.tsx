
import React from 'react';

const AssetNineteen: React.FC = () => {
  return (
    <div className="w-[400px] h-[550px] bg-white shadow-xl relative overflow-hidden border-t-8 border-slate-800 p-8 flex flex-col mx-auto">
      
      {/* Header */}
      <div className="flex justify-between items-start border-b-2 border-slate-800 pb-4 mb-6">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-slate-800 flex items-center justify-center">
                <div className="w-4 h-4 bg-slate-800 transform rotate-45"></div>
            </div>
            <div>
                <h2 className="font-sans font-bold text-sm tracking-widest">DELTA-NTU</h2>
                <p className="text-[8px] font-mono text-slate-500 uppercase">Global Stability Command</p>
            </div>
         </div>
         <div className="text-right">
            <p className="font-mono text-[9px] text-slate-500">REF: DOCTRINE_27.1</p>
            <p className="font-bold text-red-700 text-[10px] border border-red-700 px-1 inline-block mt-1">EYES ONLY</p>
         </div>
      </div>

      {/* Body Text */}
      <div className="font-mono text-xs text-slate-700 space-y-6 leading-relaxed text-justify">
         <p>
            <span className="font-bold">FROM:</span> Colonel A. Vale<br/>
            <span className="font-bold">TO:</span> Command Central
         </p>

         <p>
            Language isn't art when it's a scalpel.
         </p>

         <p>
            When you're bleeding out, you don't want the medic to interpret the nuance of your dialect. You want him to understand <span className="bg-slate-200 px-1 font-bold">EXACTLY</span> what you're saying.
         </p>

         <div className="pl-4 border-l-2 border-slate-300">
            <p className="italic text-slate-500">
               "Zero ambiguity. No regional variance. No poetic license."
            </p>
         </div>

         <p>
            We are not tyrants. We are the firewall against Babel. If preserving 47 dialects means one child dies from a translation error, I choose the child.
         </p>

         <p>
            Every. Single. Time.
         </p>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-8">
         <div className="flex justify-between items-end">
            <div className="w-32">
                <p className="text-[8px] font-mono text-slate-400 mb-2">AUTHORIZED SIGNATURE</p>
                <p className="font-serif text-xl italic text-slate-800 border-b border-slate-400 pb-1">Marcus Vale</p>
            </div>
            <div className="opacity-50">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2">
                   <circle cx="50" cy="50" r="40" />
                   <path d="M50 10 L50 90" />
                   <path d="M10 50 L90 50" />
                </svg>
            </div>
         </div>
      </div>

    </div>
  );
};

export default AssetNineteen;
