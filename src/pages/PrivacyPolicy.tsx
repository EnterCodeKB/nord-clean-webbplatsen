
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Integritetspolicy</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Inledning</h2>
          <p>
            PWNORD AB ("vi", "oss", "vår") respekterar din integritet och är engagerade i att skydda dina personuppgifter. Denna integritetspolicy informerar dig om hur vi hanterar dina personuppgifter när du besöker vår webbplats och informerar dig om dina rättigheter och hur lagen skyddar dig.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Personuppgiftsansvarig</h2>
          <p>
            PWNORD AB är personuppgiftsansvarig för dina personuppgifter. Om du har några frågor om denna integritetspolicy eller våra rutiner för dataskydd, vänligen kontakta oss på:
          </p>
          <p>
            E-post: info@pwnord.se<br />
            Telefon: 070 123 45 67<br />
            Adress: Storgatan 1, 123 45 Stockholm
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Vilka personuppgifter samlar vi in?</h2>
          <p>
            Vi kan samla in, använda, lagra och överföra olika typer av personuppgifter om dig, inklusive:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Identitetsuppgifter (namn, användarnamn eller liknande identifierare)</li>
            <li>Kontaktuppgifter (e-postadress, telefonnummer, adress)</li>
            <li>Tekniska uppgifter (IP-adress, webbläsartyp, enhetsinformation)</li>
            <li>Användaruppgifter (information om hur du använder vår webbplats)</li>
            <li>Marknadsförings- och kommunikationspreferenser</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Hur samlar vi in dina personuppgifter?</h2>
          <p>
            Vi använder olika metoder för att samla in uppgifter om dig, inklusive:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Direkt interaktion (när du fyller i formulär på vår webbplats eller kommunicerar med oss)</li>
            <li>Automatiserad teknik (cookies, serverloggar)</li>
            <li>Tredje parter (t.ex. analystjänster)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Hur använder vi dina personuppgifter?</h2>
          <p>
            Vi använder dina personuppgifter endast för de ändamål för vilka vi samlade in dem, inklusive:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>För att tillhandahålla och förbättra vår webbplats och våra tjänster</li>
            <li>För att kommunicera med dig och svara på dina förfrågningar</li>
            <li>För att skicka marknadsföringsmaterial om du har godkänt detta</li>
            <li>För att analysera användning av vår webbplats för att förbättra funktionalitet och innehåll</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Dataskydd</h2>
          <p>
            Vi har implementerat lämpliga säkerhetsåtgärder för att förhindra att dina personuppgifter förloras, används eller nås på ett obehörigt sätt, ändras eller avslöjas.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Datalagring</h2>
          <p>
            Vi behåller dina personuppgifter endast så länge det är nödvändigt för de syften för vilka vi samlade in dem, inklusive för att uppfylla juridiska, redovisnings- eller rapporteringskrav.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Dina rättigheter</h2>
          <p>
            Under dataskyddslagstiftningen har du flera rättigheter avseende dina personuppgifter, inklusive:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Rätt till tillgång till dina personuppgifter</li>
            <li>Rätt till rättelse av felaktiga uppgifter</li>
            <li>Rätt till radering av dina personuppgifter</li>
            <li>Rätt till begränsning av behandling</li>
            <li>Rätt till dataportabilitet</li>
            <li>Rätt att göra invändningar mot behandling</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Cookies</h2>
          <p>
            Vår webbplats använder cookies för att förbättra din upplevelse. Du kan ställa in din webbläsare att vägra alla eller vissa cookies, eller att varna dig när webbplatser sätter eller använder cookies. Om du inaktiverar eller vägrar cookies kan vissa delar av denna webbplats bli otillgängliga eller fungera felaktigt.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Ändringar i integritetspolicyn</h2>
          <p>
            Vi kan uppdatera vår integritetspolicy från tid till annan. Vi kommer att publicera eventuella ändringar på denna sida och, om ändringarna är betydande, kommer vi att meddela dig via e-post.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Kontaktinformation</h2>
          <p>
            Om du har frågor om denna integritetspolicy eller hur vi hanterar dina personuppgifter, vänligen kontakta oss på:
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

export default PrivacyPolicy;
