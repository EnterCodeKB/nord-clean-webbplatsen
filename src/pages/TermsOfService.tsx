
import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Användarvillkor</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            Senast uppdaterade: {new Date().toLocaleDateString('sv-SE')}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Godkännande av villkor</h2>
          <p>
            Genom att använda PWNORD AB:s webbplats ("webbplatsen") godkänner du dessa användarvillkor i sin helhet. Om du inte godkänner dessa villkor, vänligen använd inte vår webbplats.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Ändringar av villkor</h2>
          <p>
            PWNORD AB förbehåller sig rätten att när som helst ändra eller ersätta dessa villkor. Det är ditt ansvar att regelbundet kontrollera dessa villkor för ändringar. Din fortsatta användning av webbplatsen efter att ändringar publicerats utgör ditt godkännande av de reviderade villkoren.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Användning av webbplatsen</h2>
          <p>
            Du får använda vår webbplats endast för lagliga ändamål och i enlighet med dessa användarvillkor. Du samtycker till att inte använda webbplatsen:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>På något sätt som bryter mot tillämpliga lagar eller förordningar.</li>
            <li>För att skicka, medvetet ta emot, ladda upp, ladda ner, använda eller återanvända material som inte överensstämmer med våra innehållsstandarder.</li>
            <li>För att överföra eller säkerställa sändning av oönskad eller obehörig reklam eller marknadsföringsmaterial.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Immateriella rättigheter</h2>
          <p>
            Webbplatsen och dess innehåll, funktioner och funktionalitet är och förblir PWNORD AB:s exklusiva egendom. Webbplatsen skyddas av upphovsrätt, varumärke och andra lagar om immateriella rättigheter i Sverige och utomlands.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Begränsning av ansvar</h2>
          <p>
            I den utsträckning som tillåts enligt lag, kommer PWNORD AB inte att vara ansvarigt gentemot dig för någon förlust eller skada, vare sig i kontrakt, skadeståndsrätt, brott mot lagstadgade skyldigheter, eller på annat sätt, även om det är förutsebart, som uppstår under eller i samband med:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Användning av, eller oförmåga att använda, vår webbplats.</li>
            <li>Användning av eller förlitan på något innehåll som visas på vår webbplats.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Länkar till tredje parts webbplatser</h2>
          <p>
            Vår webbplats kan innehålla länkar till webbplatser som tillhandahålls av tredje part. Dessa länkar tillhandahålls endast för din bekvämlighet. PWNORD AB har ingen kontroll över innehållet på dessa webbplatser och accepterar inget ansvar för dem eller för någon förlust eller skada som kan uppstå från din användning av dem.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Uppsägning</h2>
          <p>
            Vi kan avsluta eller stänga av åtkomsten till vår webbplats omedelbart, utan föregående meddelande eller ansvar, av vilken anledning som helst, inklusive utan begränsning om du bryter mot dessa användarvillkor.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Tillämplig lag</h2>
          <p>
            Dessa villkor ska regleras och tolkas i enlighet med svensk lagstiftning. Eventuella tvister som uppstår ur eller i samband med dessa villkor ska vara föremål för den exklusiva jurisdiktionen för domstolarna i Sverige.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Kontaktinformation</h2>
          <p>
            Om du har några frågor om dessa användarvillkor, vänligen kontakta oss på:
          </p>
          <p>
            E-post: info@pwnord.se<br />
            Telefon: 070 123 45 67<br />
            Adress: Storgatan 1, 123 45 Stockholm
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
