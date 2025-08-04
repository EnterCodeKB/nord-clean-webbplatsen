import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const [content, setContent] = useState({
    headerTitle: "",
    headerText: "",
    ctaTitle: "",
    ctaText: "",
    services: [],
    process: [],
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const docRef = doc(db, "siteContent", "tjanster");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setContent(docSnap.data());
        } else {
          console.warn("Dokumentet 'tjanster' hittades inte.");
        }
      } catch (error) {
        console.error("Fel vid hämtning av tjanster-innehåll:", error);
      }
    };
    fetchContent();
  }, []);

  return (
    <>
      <section
        className="bg-brand-blue py-12 md:py-20"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="services-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              {content.headerTitle}
            </h1>
            <p className="text-xl text-white/90">{content.headerText}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {content.services?.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 ${
                  index > 0 ? "mt-16 pt-16 border-t border-gray-200" : ""
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <h3 className="font-semibold text-xl mb-3">Fördelar</h3>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mr-2 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="bg-brand-blue hover:bg-brand-darkblue"
                    >
                      <Link to="/kontakt">Boka denna tjänst</Link>
                    </Button>
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-12 md:py-16 bg-gray-50"
        aria-labelledby="process-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2
              id="process-heading"
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              Vår arbetsprocess
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {content.process.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-blue text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold mt-3 mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 md:py-16 bg-brand-blue"
        aria-labelledby="services-cta-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2
              id="services-cta-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              {content.ctaTitle}
            </h2>
            <p className="text-xl text-white/90 mb-8">{content.ctaText}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-blue hover:bg-gray-100 transition-colors duration-200"
              >
                <Link to="/kontakt">Begär offert</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-brand-blue hover:bg-white/10 transition-colors duration-200"
              >
                <a href="tel:+46706273885">Ring oss: 070 627 38 85</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
