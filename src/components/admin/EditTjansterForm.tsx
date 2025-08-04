"use client";

import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import styles from "./EditHeroForm.module.css";

// Typdefinition för att lösa TypeScript-fel
interface Service {
  title: string;
  description: string;
  image: string;
  benefits: string[];
}

interface ProcessStep {
  title: string;
  text: string;
}

interface TjansterData {
  headerTitle: string;
  headerText: string;
  ctaTitle: string;
  ctaText: string;
  services: Service[];
  process: ProcessStep[];
}

const EditTjansterForm = () => {
  const [formData, setFormData] = useState<TjansterData>({
    headerTitle: "",
    headerText: "",
    ctaTitle: "",
    ctaText: "",
    services: [],
    process: [],
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "siteContent", "tjanster");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFormData(docSnap.data() as TjansterData);
      } else {
        console.warn("❌ Dokumentet 'tjanster' hittades inte.");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleChange = (field: keyof TjansterData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleServiceChange = (
    index: number,
    field: keyof Service,
    value: string
  ) => {
    const updated = [...formData.services];

    if (field === "benefits") {
      return; // hanteras separat
    }

    updated[index][field] = value as string;
    setFormData((prev) => ({ ...prev, services: updated }));
  };

  const handleBenefitChange = (
    serviceIndex: number,
    benefitIndex: number,
    value: string
  ) => {
    const updatedServices = [...formData.services];
    updatedServices[serviceIndex].benefits[benefitIndex] = value;
    setFormData((prev) => ({ ...prev, services: updatedServices }));
  };

  const handleProcessChange = (
    index: number,
    field: keyof ProcessStep,
    value: string
  ) => {
    const updated = [...formData.process];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, process: updated }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await setDoc(doc(db, "siteContent", "tjanster"), formData);
      alert("✅ Sparat!");
    } catch (err) {
      console.error("❌ Fel vid sparning:", err);
      alert("❌ Kunde inte spara.");
    }
    setSaving(false);
  };

  if (loading) return <p>Laddar...</p>;

  return (
    <div className={styles.formWrapper}>
      <h2>Redigera Tjänster-sidan</h2>

      <label>Rubrik (headerTitle)</label>
      <input
        value={formData.headerTitle}
        onChange={(e) => handleChange("headerTitle", e.target.value)}
        className={styles.input}
      />

      <label>Ingress (headerText)</label>
      <textarea
        value={formData.headerText}
        onChange={(e) => handleChange("headerText", e.target.value)}
        className={styles.textarea}
      />

      <label>CTA Rubrik</label>
      <input
        value={formData.ctaTitle}
        onChange={(e) => handleChange("ctaTitle", e.target.value)}
        className={styles.input}
      />

      <label>CTA Text</label>
      <textarea
        value={formData.ctaText}
        onChange={(e) => handleChange("ctaText", e.target.value)}
        className={styles.textarea}
      />

      <h3 className="mt-6 mb-2">Tjänster</h3>
      {formData.services.map((service, i) => (
        <div key={i}>
          <label>Tjänst: {service.title}</label>
          <input
            value={service.title}
            onChange={(e) => handleServiceChange(i, "title", e.target.value)}
            className={styles.input}
          />
          <label>Beskrivning</label>
          <textarea
            value={service.description}
            onChange={(e) =>
              handleServiceChange(i, "description", e.target.value)
            }
            className={styles.textarea}
          />

          <label>Bild-URL</label>
          <input
            value={service.image || ""}
            onChange={(e) => handleServiceChange(i, "image", e.target.value)}
            className={styles.input}
          />

          <label>Fördelar</label>
          {service.benefits?.map((benefit, j) => (
            <input
              key={j}
              value={benefit}
              onChange={(e) => handleBenefitChange(i, j, e.target.value)}
              className={styles.input}
              style={{ marginBottom: "0.5rem" }}
            />
          ))}
        </div>
      ))}

      <h3 className="mt-6 mb-2">Vår arbetsprocess</h3>
      {formData.process.map((step, i) => (
        <div key={i}>
          <label>Steg: {step.title}</label>
          <input
            value={step.title}
            onChange={(e) => handleProcessChange(i, "title", e.target.value)}
            className={styles.input}
          />
          <label>Beskrivning</label>
          <textarea
            value={step.text}
            onChange={(e) => handleProcessChange(i, "text", e.target.value)}
            className={styles.textarea}
          />
        </div>
      ))}

      <button onClick={handleSave} disabled={saving} className={styles.button}>
        {saving ? "Sparar..." : "Spara ändringar"}
      </button>
    </div>
  );
};

export default EditTjansterForm;
