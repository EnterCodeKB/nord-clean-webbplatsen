
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and can't be changed
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Only show after 1 second for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setIsOpen(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    setPreferences(necessaryOnly);
    setIsOpen(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsOpen(false);
    setShowSettings(false);
  };

  const handleToggle = (type: 'analytics' | 'marketing') => {
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const reopenConsent = () => {
    setIsOpen(true);
  };

  if (!isOpen) return (
    <button 
      onClick={reopenConsent} 
      className="fixed bottom-4 left-4 z-50 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      aria-label="Cookieinställningar"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <path d="M8.5 8.5v.01" />
        <path d="M16 15.5v.01" />
        <path d="M12 12v.01" />
      </svg>
    </button>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="cookie-consent-title">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-auto">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h2 id="cookie-consent-title" className="text-xl font-semibold">Cookieinställningar</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700" aria-label="Stäng">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              Vi använder cookies för att förbättra din upplevelse på vår hemsida. Vissa cookies är nödvändiga för att vår hemsida ska fungera korrekt.
            </p>
            {!showSettings ? (
              <p className="text-gray-700">
                Du kan välja att godkänna alla cookies eller anpassa dina inställningar. Läs mer i vår <a href="/integritetspolicy" className="text-brand-blue hover:underline">integritetspolicy</a>.
              </p>
            ) : (
              <div className="space-y-4 mt-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-medium">Nödvändiga cookies</h3>
                    <p className="text-sm text-gray-600">Dessa cookies behövs för att vår hemsida ska fungera.</p>
                  </div>
                  <input type="checkbox" checked disabled className="h-4 w-4 text-brand-blue" />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-medium">Analysverktyg</h3>
                    <p className="text-sm text-gray-600">Hjälper oss att förstå hur besökare använder vår hemsida.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics} 
                    onChange={() => handleToggle('analytics')} 
                    className="h-4 w-4 text-brand-blue cursor-pointer" 
                  />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-medium">Marknadsföring</h3>
                    <p className="text-sm text-gray-600">Används för att visa relevant innehåll och annonser.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={preferences.marketing} 
                    onChange={() => handleToggle('marketing')} 
                    className="h-4 w-4 text-brand-blue cursor-pointer" 
                  />
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {!showSettings ? (
              <>
                <Button 
                  onClick={acceptAll} 
                  className="flex-1 bg-brand-blue hover:bg-brand-darkblue text-white"
                >
                  Acceptera alla
                </Button>
                <Button 
                  onClick={acceptNecessary}
                  variant="outline"
                  className="flex-1 border-gray-300"
                >
                  Endast nödvändiga
                </Button>
                <Button 
                  onClick={() => setShowSettings(true)}
                  variant="ghost"
                  className="flex-1"
                >
                  Anpassa
                </Button>
              </>
            ) : (
              <Button 
                onClick={savePreferences} 
                className="w-full bg-brand-blue hover:bg-brand-darkblue text-white"
              >
                Spara inställningar
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
