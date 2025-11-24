
import React from 'react';

const AssetTen: React.FC = () => {
  return (
    <div className="w-[400px] h-[400px] bg-[#e0e0e0] shadow-xl relative overflow-hidden border border-slate-300 p-0 flex flex-col items-center justify-center mx-auto">
      {/* Table/Background Texture */}
      <div className="absolute inset-0 bg-[#d4d4d4] opacity-50 pointer-events-none"
           style={{backgroundImage: 'radial-gradient(#a3a3a3 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>

      {/* The Receipt */}
      <div className="w-56 bg-white shadow-2xl p-6 transform rotate-2 relative font-mono text-[11px] text-slate-700 flex flex-col items-center border-t-8 border-slate-800/10 filter contrast-100">
        {/* Crumple effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-black/5 to-transparent pointer-events-none"></div>
        
        {/* Top tear edge */}
        <div className="absolute top-[-4px] left-0 w-full h-1 bg-white" style={{clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)'}}></div>

        <div className="text-center border-b-2 border-dashed border-slate-300 pb-4 mb-4 w-full">
           <h3 className="font-bold text-lg uppercase text-slate-900">Cracked Hourglass</h3>
           <p>7 Rue de Rennes</p>
           <p>Paris 75006</p>
           <p className="mt-1">Tel: 01 45 48 20 22</p>
        </div>

        <div className="w-full space-y-2 mb-4">
           <div className="flex justify-between">
              <span>1x Cardamom Tea</span>
              <span>4.50</span>
           </div>
           <div className="flex justify-between">
              <span>1x Pear Tart</span>
              <span>6.00</span>
           </div>
        </div>

        <div className="w-full border-t-2 border-dashed border-slate-300 pt-3 flex justify-between font-bold text-sm text-slate-900">
           <span>TOTAL</span>
           <span>10.50 €</span>
        </div>

        <div className="mt-6 text-center text-[9px] text-slate-500 w-full">
           <p>24/12/2022 - 22:00</p>
           <p>Server: Janus</p>
           <p className="mt-2">*****</p>
           <p>THANK YOU</p>
        </div>

        {/* The Green Stain */}
        <div className="absolute bottom-10 right-6 w-8 h-12 opacity-60 mix-blend-multiply transform rotate-12 filter blur-[1px]">
           {/* Simulated key stain using CSS shapes */}
           <div className="w-6 h-6 rounded-full bg-emerald-500/50 mx-auto"></div>
           <div className="w-2 h-8 bg-emerald-500/50 mx-auto -mt-1"></div>
           <div className="w-4 h-2 bg-emerald-500/50 absolute bottom-1 right-1"></div>
        </div>

        {/* Handwritten note */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-6 opacity-90 pointer-events-none">
           <p className="font-handwriting text-red-700 text-2xl whitespace-nowrap drop-shadow-sm">It's only a door.</p>
        </div>

      </div>
    </div>
  );
};

export default AssetTen;
