
import React from 'react';

const AssetSix: React.FC = () => {
  return (
    <div className="w-[400px] h-[500px] bg-white shadow-xl relative overflow-hidden border border-slate-300 p-0 flex flex-col mx-auto font-sans">
      {/* Screen Glitch Overlay */}
      <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" style={{mixBlendMode: 'overlay'}}></div>
      <div className="absolute top-20 left-0 w-full h-[1px] bg-cyan-500/30"></div>
      <div className="absolute bottom-40 left-0 w-full h-[2px] bg-red-500/10"></div>
      
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-slate-200 bg-slate-50">
        <div className="text-[10px] text-slate-500 font-mono">BUDGET_PERSONAL_2025.XLS</div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
      </div>

      {/* The Grid */}
      <div className="w-full text-[10px] font-mono bg-white p-6">
        {/* Header Row */}
        <div className="grid grid-cols-4 bg-slate-100 border border-slate-300 font-bold text-slate-600 mb-1">
          <div className="p-2 border-r border-slate-300">DATE</div>
          <div className="p-2 border-r border-slate-300">ITEM</div>
          <div className="p-2 border-r border-slate-300">COST</div>
          <div className="p-2 text-red-600">NOTES</div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-4 border-b border-slate-100">
          <div className="p-2 border-r border-slate-100 text-slate-500">01/11</div>
          <div className="p-2 border-r border-slate-100">Rent (Studio)</div>
          <div className="p-2 border-r border-slate-100">850.00</div>
          <div className="p-2 text-slate-400">Auto-debit</div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-4 border-b border-slate-100">
          <div className="p-2 border-r border-slate-100 text-slate-500">02/11</div>
          <div className="p-2 border-r border-slate-100">Groceries</div>
          <div className="p-2 border-r border-slate-100">45.20</div>
          <div className="p-2 text-slate-400">Mom (Sat)</div>
        </div>

        {/* Row 3 - Alexis */}
        <div className="grid grid-cols-4 border-b border-slate-100 bg-blue-50/30">
          <div className="p-2 border-r border-slate-100 text-slate-500">03/11</div>
          <div className="p-2 border-r border-slate-100 text-blue-900 font-bold">Alexis</div>
          <div className="p-2 border-r border-slate-100">20.00</div>
          <div className="p-2 text-blue-600">Synth loan</div>
        </div>

        {/* Row 4 - The Ghost */}
        <div className="grid grid-cols-4 border-b border-slate-100 relative mt-4 opacity-80">
          <div className="p-2 border-r border-slate-100 text-red-300">--/--</div>
          <div className="p-2 border-r border-slate-100 font-bold text-red-900 tracking-widest">NOÉMIE</div>
          <div className="p-2 border-r border-slate-100 text-red-200">ERROR</div>
          <div className="p-2 text-red-600 italic font-serif">
            "Why is this cell empty?"
          </div>
          {/* Glitch box over the row */}
          <div className="absolute inset-0 border-2 border-red-500/30 animate-pulse pointer-events-none"></div>
        </div>
        
        {/* Empty Rows */}
        {[1,2,3,4,5].map(i => (
           <div key={i} className="grid grid-cols-4 border-b border-slate-50 h-8">
             <div className="border-r border-slate-50"></div>
             <div className="border-r border-slate-50"></div>
             <div className="border-r border-slate-50"></div>
             <div></div>
           </div>
        ))}
      </div>

      <div className="mt-auto p-4 border-t border-slate-200 bg-slate-50 text-[8px] text-slate-400 font-mono flex justify-between items-center">
        <span>SHEET 1 OF 1</span>
        <span className="text-red-500 font-bold border border-red-200 px-2 py-1 bg-red-50">SYNC ERROR: GHOST DATA DETECTED</span>
      </div>
    </div>
  );
};

export default AssetSix;
