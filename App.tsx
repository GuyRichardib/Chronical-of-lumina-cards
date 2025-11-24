
import React, { useEffect } from 'react';
import CardContainer from './components/CardContainer';
import AssetOne from './components/assets/AssetOne';
import AssetTwo from './components/assets/AssetTwo';
import AssetThree from './components/assets/AssetThree';
import AssetFour from './components/assets/AssetFour';
import AssetFive from './components/assets/AssetFive';
import AssetSix from './components/assets/AssetSix';
import AssetSeven from './components/assets/AssetSeven';
import AssetEight from './components/assets/AssetEight';
import AssetNine from './components/assets/AssetNine';
import AssetTen from './components/assets/AssetTen';
import AssetEleven from './components/assets/AssetEleven';
import AssetTwelve from './components/assets/AssetTwelve';
import AssetThirteen from './components/assets/AssetThirteen';
import AssetFourteen from './components/assets/AssetFourteen';
import AssetFifteen from './components/assets/AssetFifteen';
import AssetSixteen from './components/assets/AssetSixteen';
import AssetSeventeen from './components/assets/AssetSeventeen';
import AssetEighteen from './components/assets/AssetEighteen';
import AssetNineteen from './components/assets/AssetNineteen';
import AssetTwenty from './components/assets/AssetTwenty';

const App = () => {
  useEffect(() => {
    // Manually fetch and inject fonts to avoid CORS issues with html-to-image reading external stylesheets
    const fontUrl = "https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;600;900&family=JetBrains+Mono:wght@400;700&family=Reenie+Beanie&display=swap";
    
    if (!document.querySelector(`style[data-font-source="${fontUrl}"]`)) {
      fetch(fontUrl)
        .then(response => response.text())
        .then(css => {
          const style = document.createElement('style');
          style.setAttribute('data-font-source', fontUrl);
          style.textContent = css;
          document.head.appendChild(style);
        })
        .catch(error => console.error("Error loading fonts:", error));
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#e5e5e5] flex flex-col items-center gap-8 font-mono pb-32">
      
      {/* HEADER */}
      <header className="w-full bg-slate-900 text-slate-200 py-16 px-6 mb-8 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '24px 24px'}}>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif tracking-tighter">CHRONICLES OF LIMINA</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-900 to-slate-800 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
            Official Asset Archive.<br />
            Optimized for Kindle Direct Publishing (Grayscale / e-ink).
            </p>
        </div>
      </header>

      <main className="w-full max-w-5xl px-4 flex flex-col gap-20">
        
        {/* --- BOOK 1: THE HOROLOGIUM PROTOCOL --- */}
        <div className="w-full bg-white p-8 rounded-lg shadow-sm border-l-4 border-slate-800">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-2">Book 1: The Horologium Protocol</h2>
          <p className="text-sm text-slate-500 font-mono">PARIS • CLINIC • MATRIX</p>
        </div>
        
        <div className="w-full text-center border-b border-slate-300 pb-4 mb-8">
            <h2 className="text-xl font-serif italic text-slate-600">Act I: The Fracture</h2>
        </div>

        <CardContainer title="Page 5 (Frontmatter) - The Recovered Fragment" id="card-1">
          <AssetOne />
        </CardContainer>

        <CardContainer title="Page 13 (Chapter 1) - Patient Intake (Hélène Roaé)" id="card-2">
          <AssetTwo />
        </CardContainer>

        <CardContainer title="Chapter 2 - The Fractal Journal (Personal Log)" id="card-6">
          <AssetSix />
        </CardContainer>

        <div className="w-full text-center border-b border-slate-300 pb-4 mb-8 mt-12">
            <h2 className="text-xl font-serif italic text-slate-600">Act II: The Crossing</h2>
        </div>

        <CardContainer title="Chapter 9 - The Inventory Airlock (Digital Interface)" id="card-7">
          <AssetSeven />
        </CardContainer>

        <CardContainer title="Chapter 12 - The Ledger of Debts (Status Update)" id="card-3">
          <AssetThree />
        </CardContainer>

        <CardContainer title="Chapter 16 - Correspondence Map (Water Damaged)" id="card-8">
          <AssetEight />
        </CardContainer>

        <div className="w-full text-center border-b border-slate-300 pb-4 mb-8 mt-12">
            <h2 className="text-xl font-serif italic text-slate-600">Act III: The Tribunal</h2>
        </div>

        <CardContainer title="Act III - The Tribunal Summons (Official)" id="card-9">
          <AssetNine />
        </CardContainer>

        <CardContainer title="The Matrix Identity (Éléanore Dumas - Confirmed)" id="card-4">
          <AssetFour />
        </CardContainer>

        <CardContainer title="Epilogue - The Rose Clock Schematic (Final Map)" id="card-5">
          <AssetFive />
        </CardContainer>

        <CardContainer title="End of Book - The Reader's Loop (Handwritten)" id="card-10">
          <AssetTen />
        </CardContainer>


        {/* --- BOOK 2: THE COLLECTOR --- */}
        <div className="w-full bg-[#fdf6e3] p-8 rounded-lg shadow-sm border-l-4 border-amber-800 mt-24">
          <h2 className="text-3xl font-serif font-bold text-amber-900 mb-2">Book 2: The Collector</h2>
          <p className="text-sm text-amber-700 font-mono">ATLANTA • DEBT • LEDGER</p>
        </div>

        <CardContainer title="Page 5 (Frontmatter) - The Family Anchor" id="card-11">
          <AssetEleven />
        </CardContainer>

        <CardContainer title="Chapter 2 - The Service Ledger" id="card-12">
          <AssetTwelve />
        </CardContainer>

        <CardContainer title="Chapter 13 - Pearl Chorus Accord" id="card-13">
          <AssetThirteen />
        </CardContainer>

        <CardContainer title="Chapter 14 - Integration Consent Form" id="card-14">
          <AssetFourteen />
        </CardContainer>

        <CardContainer title="Epilogue - 03:07 Convergence Log" id="card-15">
          <AssetFifteen />
        </CardContainer>

        {/* --- BOOK 3: THE BABEL'S FREQUENCY --- */}
        <div className="w-full bg-[#1c1917] p-8 rounded-lg shadow-sm border-l-4 border-stone-500 mt-24">
          <h2 className="text-3xl font-serif font-bold text-stone-200 mb-2">Book 3: The Babel's Frequency</h2>
          <p className="text-sm text-stone-400 font-mono">BAGHDAD • RESONANCE • DUST</p>
        </div>

        <CardContainer title="Page 4 (Frontmatter) - Intercepted Transmission" id="card-16">
          <AssetSixteen />
        </CardContainer>

        <CardContainer title="Chapter 1 - The Shard & Copper Mesh" id="card-17">
          <AssetSeventeen />
        </CardContainer>

        <CardContainer title="Chapter 13 - The Stairwell Kit" id="card-18">
          <AssetEighteen />
        </CardContainer>

        <CardContainer title="Chapter 29 - Vale's Doctrine Note" id="card-19">
          <AssetNineteen />
        </CardContainer>

        <CardContainer title="Epilogue - The Frequency Map" id="card-20">
          <AssetTwenty />
        </CardContainer>

      </main>

      <footer className="text-center text-slate-500 text-[10px] mt-12 mb-8">
        <p>ARCHIVE COMPLETE • BOOKS 1, 2 & 3</p>
      </footer>
    </div>
  );
};

export default App;
