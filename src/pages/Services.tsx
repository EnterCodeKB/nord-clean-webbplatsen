import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: "altaner",
      title: "Rengöring av altaner",
      image: "/images/altan.jpeg",
      description:
        "Professionell rengöring av träaltaner som tar bort smuts, alger, mossa och mögel. Vi använder skonsamma men effektiva medel och metoder för olika typer av trä.",
      benefits: [
        "Förlänger altanens livslängd",
        "Förebygger halka och olyckor",
        "Förbättrar utseendet avsevärt",
        "Klimatsmart och miljövänlig process",
      ],
    },
    {
      id: "terrasser",
      title: "Rengöring av terrasser",
      image: "/images/terass.jpeg",

      description:
        "Grundlig rengöring av terrasser i olika material som sten, betong och komposit. Våra specialanpassade metoder säkerställer bästa möjliga resultat utan att skada materialet.",
      benefits: [
        "Anpassas efter terrassens material",
        "Tar bort djupt ingrodd smuts",
        "Återställer originalfärg och utseende",
        "Professionellt utförd på kort tid",
      ],
    },
    {
      id: "uteplatser",
      title: "Rengöring av uteplatser",
      image: "/images/gator.jpeg",

      description:
        "Komplett rengöringslösning för alla typer av uteplatser. Vi tar hand om alla ytor för att skapa en inbjudande och fräsch miljö runt ditt hem eller företag.",
      benefits: [
        "Helhetslösning för hela uteplatsen",
        "Anpassade rengöringsmetoder för olika material",
        "Förbättrar trivseln utomhus",
        "Ökar värdet på din fastighet",
      ],
    },
  ];

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
              Våra tjänster
            </h1>
            <p className="text-xl text-white/90">
              Professionell rengöring av utomhusytor med fokus på kvalitet och
              hållbarhet
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {services.map((service, index) => (
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
                  />{" "}
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
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-blue text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold mt-3 mb-2 text-center">
                  Inspektion
                </h3>
                <p className="text-gray-600 text-center">
                  Vi inspekterar ytan och bedömer vilken metod som är mest
                  lämplig.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-blue text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold mt-3 mb-2 text-center">
                  Prisförslag
                </h3>
                <p className="text-gray-600 text-center">
                  Vi tar fram ett detaljerat prisförslag baserat på ytans skick
                  och storlek.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-blue text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold mt-3 mb-2 text-center">
                  Rengöring
                </h3>
                <p className="text-gray-600 text-center">
                  Vi utför rengöringen med rätt metod och utrustning för bästa
                  resultat.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-blue text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold mt-3 mb-2 text-center">
                  Slutbesiktning
                </h3>
                <p className="text-gray-600 text-center">
                  Vi går igenom resultatet tillsammans med dig för att
                  säkerställa att du är nöjd.
                </p>
              </div>
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
              Behöver du hjälp med din utomhusyta?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Kontakta oss idag för en kostnadsfri konsultation. Vi skräddarsyr
              en lösning för dina behov.
            </p>
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
