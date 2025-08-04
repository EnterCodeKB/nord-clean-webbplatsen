"use client";

import React, { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const UploadTjansterData = () => {
  useEffect(() => {
    const uploadData = async () => {
      const data = {
        headerTitle: "Våra tjänster",
        headerText:
          "Professionell rengöring av utomhusytor med fokus på kvalitet och hållbarhet",
        ctaTitle: "Behöver du hjälp med din utomhusyta?",
        ctaText:
          "Kontakta oss idag för en kostnadsfri konsultation. Vi skräddarsyr en lösning för dina behov.",
        services: [
          {
            id: "altaner",
            title: "Rengöring av altaner",
            image: "/images/altan.png",
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
            image: "/images/terrass.png",
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
            image: "/images/gator.png",
            description:
              "Komplett rengöringslösning för alla typer av uteplatser. Vi tar hand om alla ytor för att skapa en inbjudande och fräsch miljö runt ditt hem eller företag.",
            benefits: [
              "Helhetslösning för hela uteplatsen",
              "Anpassade rengöringsmetoder för olika material",
              "Förbättrar trivseln utomhus",
              "Ökar värdet på din fastighet",
            ],
          },
        ],
        process: [
          {
            title: "Inspektion",
            text: "Vi inspekterar ytan och bedömer vilken metod som är mest lämplig.",
          },
          {
            title: "Prisförslag",
            text: "Vi tar fram ett detaljerat prisförslag baserat på ytans skick och storlek.",
          },
          {
            title: "Rengöring",
            text: "Vi utför rengöringen med rätt metod och utrustning för bästa resultat.",
          },
          {
            title: "Slutbesiktning",
            text: "Vi går igenom resultatet tillsammans med dig för att säkerställa att du är nöjd.",
          },
        ],
      };

      try {
        await setDoc(doc(db, "siteContent", "tjanster"), data);
        console.log("✅ Innehållet laddades upp till Firestore!");
      } catch (error) {
        console.error("❌ Fel vid uppladdning:", error);
      }
    };

    uploadData();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Uploader körs...</h1>
      <p>Innehållet för “Tjänster” laddas upp automatiskt till Firestore.</p>
    </div>
  );
};
export default UploadTjansterData;
