import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Kvalitet",
      description:
        "Vi arbetar alltid med de bästa metoderna och materialen för att ge dig ett långvarigt resultat.",
    },
    {
      id: 2,
      title: "Miljömedvetenhet",
      description:
        "Vi använder miljövänliga rengöringsmedel och metoder som är skonsamma för din omgivning.",
    },
    {
      id: 3,
      title: "Kundnöjdhet",
      description:
        "Din tillfredsställelse är vår högsta prioritet. Vi strävar efter att överträffa dina förväntningar.",
    },
    {
      id: 4,
      title: "Kompetens",
      description:
        "Vår personal är välutbildad och certifierad för att hantera alla typer av rengöringsprojekt.",
    },
  ];

  const milestones = [
    { year: 2024, text: "Expanderar med nya tjänster och områden" },
    { year: 2025, text: "Utökar verksamheten till Stockholm" },
    { year: 2026, text: "Nå över 1000 nöjda kunder" },

    //{ year: 2019, text: "Lanserar vårt miljövänliga rengöringsprogram" },
    //{ year: 2024, text: "Expanderar med nya tjänster och områden" },
  ];

  return (
    <>
      <section
        className="bg-brand-blue py-12 md:py-20"
        aria-labelledby="about-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Om PWNORD
            </h1>
            <p className="text-xl text-white/90">
              Din pålitliga partner för professionell rengöring av utomhusytor
            </p>
          </div>
        </div>
      </section>
      <section
        className="py-12 md:py-16 bg-white"
        aria-labelledby="our-story-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="our-story-heading" className="text-3xl font-bold mb-6">
                  Vår berättelse
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  PWNORD grundades 2025 med en enkel vision: att erbjuda
                  professionell och miljövänlig rengöring av utomhusytor till
                  rimliga priser. Vår grundare, såg ett behov av högkvalitativ
                  rengöringsservice för altaner och uteplatser i
                  Stockholm-området.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Vi bygger upp ett team av dedikerade experter med passion för
                  kvalitet och miljömedvetenhet. Idag har PWNORD hjälpt många
                  kunder att förlänga livslängden på sina utomhusytor och
                  förbättra utseendet på deras hem och arbetsplatser.
                </p>
                <p className="text-lg text-gray-700">
                  Vi fortsätter att växa och utveckla våra tjänster, men vår
                  grundläggande filosofi förblir densamma: att leverera
                  överlägsna resultat med kundens behov i fokus och med respekt
                  för miljön.
                </p>
              </div>
              <div className="h-96 rounded-lg">
                <img src="/images/team.jpeg" alt="Teamet" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 md:py-16 bg-gray-50"
        aria-labelledby="values-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2
              id="values-heading"
              className="text-3xl font-bold mb-6 text-center"
            >
              Våra värderingar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {values.map((value) => (
                <div
                  key={value.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 md:py-16 bg-white"
        aria-labelledby="history-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="history-heading"
              className="text-3xl font-bold mb-8 text-center"
            >
              Vår historia
            </h2>
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:translate-x-px"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="md:w-1/2"></div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-brand-blue border-4 border-white z-10"></div>
                    </div>
                    <div
                      className={`relative md:w-1/2 pt-1.5 md:pt-0 pl-10 md:pl-0 ${
                        index % 2 === 0 ? "md:pr-10 text-right" : "md:pl-10"
                      }`}
                    >
                      <span className="text-brand-blue font-bold text-xl">
                        {milestone.year}
                      </span>
                      <p className="text-lg text-gray-700">{milestone.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 md:py-16 bg-brand-blue"
        aria-labelledby="about-cta-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2
              id="about-cta-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Redo att samarbeta med oss?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Kontakta oss idag för en kostnadsfri konsultation och prisförslag
              på ditt projekt.
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
                <Link to="/tjanster">Utforska våra tjänster</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
