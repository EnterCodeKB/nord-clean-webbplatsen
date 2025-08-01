// src/pages/AdminPage.tsx
import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase"; // justera vid behov
import LogoutButton from "@/components/LogoutButton"; // justera sökvägen om nödvändigt
import EditHeroForm from "@/components/admin/EditHeroForm";

const AdminPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, "siteContent", "Homepage");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitle(data.title || "");
        setBody(data.body || "");
      }
      setLoading(false);
    };
    fetchContent();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await setDoc(doc(db, "siteContent", "Homepage"), {
        title,
        body,
      });
      alert("✅ Innehållet uppdaterat!");
    } catch (err) {
      alert("❌ Fel vid sparning");
      console.error(err);
    }
    setSaving(false);
  };

  if (loading) return <p>Laddar innehåll...</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Adminpanel: Startsida</h1>
      <EditHeroForm /> {/* ← Lägg till här */}
      <label className="block mb-2 font-medium">Rubrik</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border w-full p-2 mb-4"
      />
      <label className="block mb-2 font-medium">Brödtext</label>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="border w-full p-2 h-40 mb-4"
      />
      <button
        onClick={handleSave}
        disabled={saving}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {saving ? "Sparar..." : "Spara ändringar"}
      </button>
      <div className="flex justify-end p-4">
        <LogoutButton />
      </div>
    </div>
  );
};

export default AdminPage;
