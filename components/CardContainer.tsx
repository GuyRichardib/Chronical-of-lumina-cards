import React, { useRef, useState } from 'react';
import { toPng } from 'html-to-image';

interface CardContainerProps {
  children: React.ReactNode;
  title: string;
  id: string;
}

const CardContainer: React.FC<CardContainerProps> = ({ children, title, id }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    if (cardRef.current === null) {
      return;
    }

    setIsGenerating(true);
    try {
      // Configuration for high-quality export:
      // - cacheBust: true ensures we get fresh assets
      // - pixelRatio: 3 creates a high-res image (3x screen density)
      // - style: { transform: 'none' } prevents hover effects from being captured in the screenshot
      const dataUrl = await toPng(cardRef.current, { 
        cacheBust: true, 
        pixelRatio: 3,
        style: { transform: 'none' } 
      });
      
      const link = document.createElement('a');
      link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
      alert('Erreur lors de la génération de l\'image. Vérifiez la console pour plus de détails.');
    } finally {
      setIsGenerating(false);
    }
  };

  const showInstructions = () => {
    alert("Pour une qualité optimale dans Kindle Create :\n\n1. Passez en mode Plein Écran (F11 ou bouton en haut à droite).\n2. Faites une capture d'écran de la fiche seule (Windows: Win+Shift+S / Mac: Cmd+Shift+4).\n3. Cela garantit la meilleure résolution sans compression JPEG.");
  };

  return (
    <div className="flex flex-col items-center gap-6 mb-24 w-full max-w-2xl mx-auto">
      {/* The Card Render Area */}
      <div className="relative group perspective">
        <div 
          ref={cardRef} 
          id={id} 
          className="transition-transform duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
        >
          {children}
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-3">
        <button 
          onClick={handleDownload}
          disabled={isGenerating}
          className="px-4 py-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-700 transition-all rounded shadow-md flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Génération...
            </span>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Télécharger PNG
            </>
          )}
        </button>

        <button 
          onClick={showInstructions}
          className="px-4 py-2 bg-white text-slate-600 border border-slate-300 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors rounded shadow-sm flex items-center gap-2"
        >
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
           Aide Qualité KDP
        </button>
      </div>

      <div className="flex items-center gap-2 opacity-50">
        <div className="h-px w-8 bg-slate-300"></div>
        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{title}</span>
        <div className="h-px w-8 bg-slate-300"></div>
      </div>
    </div>
  );
};

export default CardContainer;