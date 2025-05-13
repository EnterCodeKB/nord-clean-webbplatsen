
import React from 'react';

const Accessibility = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Tillgänglighetsutlåtande</h1>
        
        <div className="prose max-w-none">
          <p className="mb-6">
            PWNORD AB strävar efter att göra vår webbplats tillgänglig och användbar för alla personer, inklusive de med funktionsnedsättningar. Vi arbetar kontinuerligt för att förbättra användarupplevelsen för alla och tillämpar relevanta tillgänglighetsstandarder.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Överensstämmelse med standarder</h2>
          <p>
            Vår webbplats är utformad för att vara kompatibel med:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>WCAG 2.2 (Web Content Accessibility Guidelines)</li>
            <li>EN 301 549 Tillgänglighetskrav för offentlig upphandling av IKT-produkter och -tjänster i Europa</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Tillgänglighetsfunktioner</h2>
          <p>
            Vår webbplats innehåller följande tillgänglighetsfunktioner:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-6">
            <li>Responsiv design som anpassar sig till olika enheter och skärmstorlekar</li>
            <li>Lämplig kontrast mellan text och bakgrund</li>
            <li>Tydliga och beskrivande länktexter</li>
            <li>Alternativtexter för bilder</li>
            <li>Rubrikstruktur för att underlätta navigering med hjälpmedel</li>
            <li>Möjlighet att navigera med tangentbord</li>
            <li>ARIA-landmärken för att hjälpa användare med skärmläsare</li>
            <li>Formulär med tydliga etiketter och felmeddelanden</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Begränsningar</h2>
          <p>
            Trots våra ansträngningar finns det några aspekter av webbplatsen som vi arbetar på att förbättra:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Vissa dokument i PDF-format kan sakna tillgänglighetstaggar</li>
            <li>Vissa äldre innehåll kan behöva uppdateras för att uppfylla alla tillgänglighetskrav</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Feedback och kontaktinformation</h2>
          <p>
            Vi välkomnar dina kommentarer om tillgängligheten på vår webbplats. Om du upplever tillgänglighetsproblem, har specifika frågor eller behöver hjälp med något innehåll som inte är tillgängligt, vänligen kontakta oss på:
          </p>
          <p className="mb-6">
            E-post: info@pwnord.se<br />
            Telefon: 070 123 45 67
          </p>
          <p>
            Vi strävar efter att svara på din feedback inom 3 arbetsdagar.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Bedömningsmetodik</h2>
          <p>
            PWNORD AB bedömer webbplatsens tillgänglighet genom en kombination av:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Självutvärdering med hjälp av automatiserade tillgänglighetskontrollverktyg</li>
            <li>Manuell testning med olika webbläsare och hjälpmedel</li>
            <li>Testning med användare med olika funktionsnedsättningar</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Förbättringsplan</h2>
          <p>
            Vi arbetar kontinuerligt med att förbättra tillgängligheten på vår webbplats genom:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Regelbundna tillgänglighetsgranskningar</li>
            <li>Utbildning av vår personal i tillgänglighetsfrågor</li>
            <li>Inkludering av tillgänglighet i vår designprocess</li>
            <li>Planerade uppdateringar för att åtgärda kända tillgänglighetsproblem</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Datum</h2>
          <p>
            Detta tillgänglighetsutlåtande uppdaterades senast den {new Date().toLocaleDateString('sv-SE')}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
