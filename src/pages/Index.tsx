"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import TextList from "../components/TextList"; // justera om du inte använder @
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

// ✅ Definiera typ innan komponenten
type HeroContent = {
  title: string;
  description: string;
};

const Index = () => {
  const [heroContent, setHeroContent] = useState<HeroContent>({
    title: "Laddar rubrik...",
    description: "Laddar text...",
  });

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const docRef = doc(db, "siteContent", "Homepage");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as HeroContent;

          if (data.title && data.description) {
            setHeroContent({
              title: data.title,
              description: data.description,
            });
          } else {
            console.warn("⚠️ Dokumentet finns men saknar rätt fält.");
          }
        } else {
          console.warn("⚠️ Dokumentet 'Homepage' finns inte.");
        }
      } catch (error) {
        console.error("❌ Fel vid hämtning av innehåll:", error);
      }
    };

    fetchHero();
  }, []);

  const benefits = [
    { id: 1, text: "Erfaren och certifierad personal" },
    { id: 2, text: "Miljövänliga rengöringsmedel" },
    { id: 3, text: "Modern och effektiv utrustning" },
    { id: 4, text: "Snabb och pålitlig service" },
    { id: 5, text: "Konkurrenskraftiga priser" },
    { id: 6, text: "Nöjd kund-garanti" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Anna Svensson",
      location: "Stockholm",
      text: "PWNORD gjorde ett fantastiskt jobb med vår altan. Den ser ut som ny igen! Snabb service och professionellt bemötande.",
      rating: 5,
    },
    {
      id: 2,
      name: "Erik Johansson",
      location: "Uppsala",
      text: "Mycket nöjd med resultatet. Personalen var kunnig och noggrann. Rekommenderas varmt!",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria Lindberg",
      location: "Västerås",
      text: "Gjorde ett utmärkt jobb med rengöringen av vår träaltan. Den hade inte sett så bra ut på många år!",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-brand-blue py-[100px]"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darkblue to-brand-blue opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1
              id="hero-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              {heroContent.title}
            </h1>
            <p className="text-lg text-white/90 mb-6">
              {heroContent.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-blue hover:bg-gray-100 transition-colors duration-200"
              >
                <Link to="/kontakt">Boka gratis besiktning</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-brand-blue hover:bg-white/10 transition-colors duration-200"
              >
                <Link to="/tjanster">Våra tjänster</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Våra tjänster
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder professionell rengöring av alla typer av utomhusytor
              för både privatpersoner och företag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
              <div className="h-48 bg-gray-200 rounded-md mb-4">
                {" "}
                <img
                  className="h-48 w-full object-cover rounded-md"
                  src="/images/altan.png"
                  alt="Rengöring av altan - före"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">Rengöring av altaner</h3>
              <p className="text-gray-600 mb-4">
                Effektiv rengöring som tar bort smuts, mossa och alger från din
                altan.
              </p>
              <Link
                to="/tjanster#altaner"
                className="inline-flex items-center text-brand-blue hover:text-brand-darkblue font-medium"
              >
                <span>Läs mer</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
              <div className="h-48 bg-gray-200 rounded-md mb-4">
                {" "}
                <img
                  className="h-52 w-96 rounded-md mb-4"
                  src="/images/terrass.png"
                  alt="terrass"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Rengöring av terrasser</h3>
              <p className="text-gray-600 mb-4">
                Grundlig rengöring av terrasser i alla material, från trä till
                sten och betong.
              </p>
              <Link
                to="/tjanster#terrasser"
                className="inline-flex items-center text-brand-blue hover:text-brand-darkblue font-medium"
              >
                <span>Läs mer</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
              <div className="h-48 bg-gray-200 rounded-md mb-4">
                {" "}
                <img
                  className="h-52 w-96 rounded-md mb-4"
                  src="/images/gator.png"
                  alt="gator"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Rengöring av gator</h3>
              <p className="text-gray-600 mb-4">
                Skonsam men effektiv rengöring av gatir för ett fräschare yttre.
              </p>
              <Link
                to="/tjanster#fasader"
                className="inline-flex items-center text-brand-blue hover:text-brand-darkblue font-medium"
              >
                <span>Läs mer</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-brand-blue hover:bg-brand-darkblue">
              <Link to="/tjanster">Visa alla tjänster</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="py-16 md:py-24 bg-gray-50"
        aria-labelledby="benefits-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="benefits-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Varför välja oss?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi på PWNORD strävar alltid efter att leverera högsta kvalitet och
              service till våra kunder.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex items-start p-4">
                <CheckCircle className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
                <p className="text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-16 md:py-24 bg-white"
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Vad våra kunder säger
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi är stolta över att <strong> alla </strong> våra kunder är nöjda
              med sina utomhusytor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-24 bg-brand-blue"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Redo att fräscha upp din altan?
            </h2>

            <p className="text-xl text-white/90 mb-8">
              Kontakta oss idag för en kostnadsfri offert och besiktning. Vi
              hjälper dig att få dina utomhusytor att se ut som nya igen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-blue hover:bg-gray-100 transition-colors duration-200"
              >
                <Link to="/kontakt">Kontakta oss</Link>
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

export default Index;
