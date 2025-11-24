
import React from 'react';

const AssetTwelve: React.FC = () => {
  return (
    <div className="w-[400px] h-[500px] bg-[#1a1a1a] shadow-2xl relative overflow-hidden border-t-4 border-amber-500 p-0 flex flex-col mx-auto font-mono text-slate-300">
      
      {/* Header */}
      <div className="bg-[#111] p-4 border-b border-slate-800 flex justify-between items-center">
        <div>
            <h2 className="text-amber-500 text-xs font-bold tracking-widest">DEBT LEDGER</h2>
            <p className="text-[8px] text-slate-500">USER: E. VOSS // DAY 14</p>
        </div>
        <div className="text-right">
             <p className="text-[8px] text-slate-500">BALANCE STATUS</p>
             <p className="text-red-500 font-bold text-xs animate-pulse">CRITICAL</p>
        </div>
      </div>

      {/* Grid Container */}
      <div className="p-6 flex-1 relative">
        {/* Vertical Line */}
        <div className="absolute top-6 bottom-6 left-1/2 w-px bg-slate-700 z-0"></div>

        {/* Column Headers */}
        <div className="flex justify-between text-[9px] text-slate-500 mb-4 px-2 font-bold z-10 relative">
            <span>FAVOR RENDERED</span>
            <span>PHYSICAL COST</span>
        </div>

        {/* Entries */}
        <div className="space-y-6 text-[10px] z-10 relative">
            
            {/* Entry 1 */}
            <div className="flex justify-between items-center group">
                <div className="w-[45%] text-right pr-4">
                    <p className="text-amber-100">Emergency Spreadsheet Rescue (CFO)</p>
                    <p className="text-[8px] text-slate-600">02:00 - 04:00</p>
                </div>
                <div className="w-[10%] flex justify-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
                </div>
                <div className="w-[45%] pl-4">
                    <p className="text-red-300">Taste of espresso replaced by chalk</p>
                    <p className="text-[8px] text-red-900 bg-red-900/20 inline-block px-1 rounded">DURATION: 4H</p>
                </div>
            </div>

            {/* Entry 2 */}
            <div className="flex justify-between items-center group">
                <div className="w-[45%] text-right pr-4">
                    <p className="text-amber-100">Care Package Delivery</p>
                    <p className="text-[8px] text-slate-600">14 Items</p>
                </div>
                <div className="w-[10%] flex justify-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
                <div className="w-[45%] pl-4">
                    <p className="text-red-300">Left wrist numbness</p>
                    <p className="text-[8px] text-red-900 bg-red-900/20 inline-block px-1 rounded">RING HEAT +2°C</p>
                </div>
            </div>

            {/* Entry 3 - Rejected */}
            <div className="flex justify-between items-center opacity-50">
                <div className="w-[45%] text-right pr-4">
                    <p className="text-slate-500 line-through">Sarah's 02:00 Call</p>
                </div>
                <div className="w-[10%] flex justify-center">
                    <div className="w-2 h-2 border border-slate-600 rounded-full"></div>
                </div>
                <div className="w-[45%] pl-4">
                    <p className="text-slate-500 font-bold">SERVICE INVALID</p>
                    <p className="text-[8px] text-slate-600">NON-TRANSFERABLE</p>
                </div>
            </div>

        </div>

        {/* Footer Warning */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-slate-800">
            <p className="text-center text-[9px] text-amber-600 font-bold">
                WARNING: Gratitude ≠ Payment. Interest accumulates nightly.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AssetTwelve;
