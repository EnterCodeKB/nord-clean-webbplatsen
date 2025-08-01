"use client";

import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import styles from "./EditHeroForm.module.css"; // CSS-modul

const EditHeroForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const docRef = doc(db, "siteContent", "Homepage");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title || "");
          setDescription(data.description || "");
        } else {
          setMessage("⚠️ Dokumentet 'Homepage' hittades inte.");
        }
      } catch (error) {
        console.error("❌ Fel vid hämtning:", error);
        setMessage("❌ Ett fel uppstod vid hämtning av datan.");
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await setDoc(doc(db, "siteContent", "Homepage"), {
        title,
        description,
      });
      setMessage("✅ Uppdatering sparad!");
    } catch (error) {
      console.error("❌ Fel vid sparning:", error);
      setMessage("❌ Kunde inte spara ändringar.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className={styles.message}>⏳ Laddar innehåll...</p>;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Redigera startsidans hero-innehåll</h2>

      <label className={styles.label}>Rubrik</label>
      <input
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ange ny rubrik"
      />

      <label className={styles.label}>Beskrivning</label>
      <textarea
        className={styles.textarea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Ange ny beskrivning"
      />

      <button onClick={handleSave} disabled={saving} className={styles.button}>
        {saving ? "Sparar..." : "Spara ändringar"}
      </button>

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default EditHeroForm;
