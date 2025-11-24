
import React from 'react';

const AssetSeventeen: React.FC = () => {
  return (
    <div className="w-[400px] h-[400px] bg-[#e5e4e2] shadow-xl relative overflow-hidden p-0 flex flex-col items-center justify-center mx-auto border border-stone-300">
      {/* Texture: Stone/Concrete */}
      <div className="absolute inset-0 opacity-60 pointer-events-none" 
           style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.4\'/%3E%3C/svg%3E")'}}>
      </div>

      {/* The Object */}
      <div className="relative z-10 w-48 h-64 flex flex-col items-center justify-center">
         
         {/* The Shard */}
         <div className="w-24 h-40 bg-stone-700 rotate-3 relative shadow-2xl" style={{clipPath: 'polygon(20% 0%, 80% 10%, 100% 35%, 85% 80%, 50% 100%, 15% 85%, 0% 40%)'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-stone-600 to-stone-900"></div>
            {/* Inner glow */}
            <div className="absolute top-10 left-8 w-1 h-20 bg-white/10 blur-sm transform -rotate-12"></div>
         </div>

         {/* Copper Mesh Overlay */}
         <div className="absolute w-28 h-44 border-2 border-orange-700/40 rounded-lg rotate-3 flex items-center justify-center" style={{background: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(180, 83, 9, 0.3) 5px, rgba(180, 83, 9, 0.3) 6px), repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(180, 83, 9, 0.3) 5px, rgba(180, 83, 9, 0.3) 6px)'}}>
         </div>
         
         {/* Vibration Lines */}
         <div className="absolute -left-4 top-1/2 w-2 h-12 border-l-2 border-stone-400 rounded-l-full opacity-50"></div>
         <div className="absolute -right-4 top-1/2 w-2 h-12 border-r-2 border-stone-400 rounded-r-full opacity-50"></div>

      </div>

      {/* Label */}
      <div className="absolute bottom-8 bg-white/80 backdrop-blur-sm px-4 py-2 border border-stone-300 shadow-sm text-center">
         <h3 className="font-serif text-stone-800 italic text-lg">Artifact 01</h3>
         <p className="font-mono text-[8px] text-stone-500 uppercase tracking-widest">Baghdad Retrieval • Unclassified</p>
      </div>

    </div>
  );
};

export default AssetSeventeen;
