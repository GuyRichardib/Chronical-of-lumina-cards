
import React from 'react';

const AssetTwenty: React.FC = () => {
  return (
    <div className="w-[400px] h-[300px] bg-[#0b0c10] shadow-2xl relative overflow-hidden p-0 flex flex-col mx-auto border-2 border-slate-800">
      
      {/* Map Background (Abstract) */}
      <div className="absolute inset-0 opacity-20">
         <svg className="w-full h-full" viewBox="0 0 400 300">
            {/* Abstract continents outline hint */}
            <path d="M50,50 Q150,20 250,80 T400,150" stroke="#334155" strokeWidth="1" fill="none" />
            <path d="M20,150 Q100,200 180,180 T350,250" stroke="#334155" strokeWidth="1" fill="none" />
         </svg>
      </div>

      <div className="relative z-10 h-full w-full">
         
         {/* The Triangle */}
         <svg className="w-full h-full absolute inset-0">
            {/* Connection Lines - The Wave */}
            <path d="M200,80 Q280,150 320,220" stroke="#eab308" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-pulse" />
            <path d="M200,80 Q120,150 80,220" stroke="#eab308" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-pulse" />
            <path d="M80,220 Q200,250 320,220" stroke="#eab308" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-pulse" />
            
            {/* Rome Point */}
            <circle cx="200" cy="80" r="3" fill="#eab308" />
            <text x="200" y="70" textAnchor="middle" fill="#cbd5e1" fontSize="8" fontFamily="monospace">ROME (NOTES)</text>

            {/* Timbuktu Point (Approx) / Baghdad -> Representing the triangle of cities */}
            {/* Let's stick to the book's specific triangle: Baghdad, Rome, Timbuktu, though text mentions Atlanta/Paris/Rome finale. 
                Let's map the finale triangle: Atlanta, Rome, Paris.
            */}
            
            {/* Paris/Rome/Atlanta Triangle for finale context, or the Book 3 specific map. 
                Book 3 context: "Baghdad. Rome. Nippur. Timbuktu." 
                Let's do the "Circle Closing" map from Chapter 6.
            */}
         </svg>

         {/* Nodes */}
         <div className="absolute top-[26%] left-[50%] transform -translate-x-1/2">
            <div className="w-2 h-2 bg-white rounded-full animate-ping absolute opacity-75"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full relative"></div>
         </div>

         <div className="absolute bottom-[26%] left-[20%]">
             <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
             <p className="text-[8px] text-stone-500 font-mono mt-1">TIMBUKTU</p>
         </div>

         <div className="absolute bottom-[26%] right-[20%]">
             <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
             <p className="text-[8px] text-stone-500 font-mono mt-1 text-right">BAGHDAD</p>
         </div>

         {/* The Waveform Overlay */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
            <svg className="w-full h-32" viewBox="0 0 400 100" preserveAspectRatio="none">
               <path d="M0,50 Q100,0 200,50 T400,50" stroke="white" strokeWidth="0.5" fill="none" />
               <path d="M0,50 Q100,100 200,50 T400,50" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
         </div>
      </div>

      <div className="absolute bottom-4 w-full text-center">
         <p className="font-serif italic text-stone-400 text-sm">"The circle closes."</p>
         <p className="font-mono text-[8px] text-stone-600 mt-1">FREQUENCY 432HZ CONFIRMED</p>
      </div>

    </div>
  );
};

export default AssetTwenty;
