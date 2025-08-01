"use client";

import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import styles from "./EditHeroForm.module.css";

const EditHeroForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchHero = async () => {
      const docRef = doc(db, "siteContent", "Homepage");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitle(data.title || "");
        setText(data.text || "");
      } else {
        console.warn("❌ Dokumentet 'Homepage' hittades inte.");
      }
      setLoading(false);
    };
    fetchHero();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await setDoc(doc(db, "siteContent", "Homepage"), {
        title,
        text,
      });
      alert("✅ Sparat!");
    } catch (err) {
      console.error("❌ Fel vid sparning:", err);
      alert("❌ Kunde inte spara.");
    }
    setSaving(false);
  };

  if (loading) return <p>Laddar innehåll...</p>;

  return (
    <div className={styles.formWrapper}>
      <h2>Redigera startsidans hero</h2>

      <label htmlFor="title">Rubrik</label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />

      <label htmlFor="text">Beskrivning</label>
      <textarea
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.textarea}
      />

      <button onClick={handleSave} className={styles.button} disabled={saving}>
        {saving ? "Sparar..." : "Spara ändringar"}
      </button>
    </div>
  );
};

export default EditHeroForm;
