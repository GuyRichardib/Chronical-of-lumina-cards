import React from 'react';

const AssetOne: React.FC = () => {
  return (
    <div className="w-[400px] h-[500px] bg-paper-50 shadow-xl relative overflow-hidden border border-slate-300 p-0 flex flex-col mx-auto">
      {/* Grunge Texture Layer */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-noise"></div>
      
      {/* Top Bar */}
      <div className="bg-slate-900 p-4 flex justify-between items-center z-10">
         <h2 className="text-white text-xs font-bold tracking-[0.2em] uppercase">Archives Aubin</h2>
         <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
      </div>

      <div className="p-8 flex-1 flex flex-col relative z-10">
        {/* Date Stamp */}
        <div className="absolute top-6 right-8 border-2 border-slate-800 px-2 py-1 transform rotate-3 opacity-70 mix-blend-multiply">
           <span className="text-[10px] font-bold text-slate-800">DATE: UNKNOWN</span>
        </div>

        <div className="mt-8 space-y-6 font-serif text-slate-800 leading-relaxed text-sm">
           <p>
             Patient intake record for Case <span className="bg-slate-900 text-slate-900 select-none px-1">H-47</span>.
             Subject found wandering near <span className="bg-slate-900 text-slate-900 select-none px-1">Saint-Aubin</span>.
           </p>
           
           <div className="pl-4 border-l-2 border-slate-300 italic text-slate-600">
             "My reflection is <span className="bg-black text-black px-1 select-none">counting backwards</span>."
           </div>

           <p>
             <span className="font-bold text-xs uppercase tracking-wide text-slate-900 block mb-1 font-sans">Incident Log:</span>
             Ward temperature dropped <span className="bg-slate-900 text-slate-900 px-1">3°C</span> instantaneously. 
             Mirror surfaces show signs of <span className="bg-black text-black px-1">fracture</span> without impact.
           </p>

           <p>
             Recommend immediate transfer to <span className="bg-slate-900 text-slate-900 px-2">Horologium</span> for observation.
           </p>
        </div>

        {/* Big Redacted Stamp */}
        <div className="mt-auto self-center transform -rotate-6 border-4 border-slate-800 p-2 opacity-90 mix-blend-multiply">
           <span className="text-3xl font-black text-slate-800 uppercase tracking-widest font-sans">CLASSIFIED</span>
        </div>
      </div>
      
      {/* Burn mark effect bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-amber-100/40 to-transparent pointer-events-none z-20"></div>
    </div>
  );
};

export default AssetOne;