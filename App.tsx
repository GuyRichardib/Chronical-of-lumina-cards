import React, { useEffect } from 'react';
import CardContainer from './components/CardContainer';
import AssetOne from './components/assets/AssetOne';
import AssetTwo from './components/assets/AssetTwo';
import AssetThree from './components/assets/AssetThree';
import AssetFour from './components/assets/AssetFour';
import AssetFive from './components/assets/AssetFive';

const App = () => {
  useEffect(() => {
    // Manually fetch and inject fonts to avoid CORS issues with html-to-image reading external stylesheets
    // This allows the library to access the cssRules and correctly embed fonts in the generated image.
    const fontUrl = "https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;600;900&family=JetBrains+Mono:wght@400;700&family=Reenie+Beanie&display=swap";
    
    // Check if the style tag already exists to prevent duplicates (helpful in dev/hmr)
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
        {/* Abstract Pattern in Header */}
        <div className="absolute inset-0 opacity-10" 
             style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '24px 24px'}}>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif tracking-tighter">HOROLOGIUM ASSETS</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-900 to-slate-800 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
            Archive numérique des artefacts narratifs. <br />
            Optimisé pour l'insertion Kindle KDP (niveaux de gris / e-ink).
            </p>
        </div>
      </header>

      <main className="w-full max-w-5xl px-4 flex flex-col gap-12">
        {/* ASSET 01 */}
        <CardContainer title="Asset 01: The Redacted Fragment" id="card-1">
          <AssetOne />
        </CardContainer>

        {/* ASSET 02 */}
        <CardContainer title="Asset 02: Hélène Roaé Intake" id="card-2">
          <AssetTwo />
        </CardContainer>

        {/* ASSET 03 */}
        <CardContainer title="Asset 03: The Witness Ledger" id="card-3">
          <AssetThree />
        </CardContainer>

        {/* ASSET 04 */}
        <CardContainer title="Asset 04: Matrix Identity" id="card-4">
          <AssetFour />
        </CardContainer>

        {/* ASSET 05 */}
        <CardContainer title="Asset 05: Rose Clock Schematic" id="card-5">
          <AssetFive />
        </CardContainer>
      </main>

      <footer className="text-center text-slate-500 text-[10px] mt-12 mb-8">
        <p>CONFIDENTIAL • HOROLOGIUM PROJECT • 2024</p>
      </footer>
    </div>
  );
};

export default App;