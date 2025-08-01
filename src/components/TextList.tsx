import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

type TextItem = {
  id: string;
  title: string;
  content: string;
  createdAt?: { seconds: number; nanoseconds: number }; // Firestore timestamp
};

const TextList: React.FC = () => {
  const [texts, setTexts] = useState<TextItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const q = query(collection(db, "texter"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const items: TextItem[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as TextItem[];
        setTexts(items);
      } catch (error) {
        console.error("Fel vid hämtning av texter:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTexts();
  }, []);

  if (loading) return <p>Laddar texter...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Publicerade texter</h2>
      {texts.length === 0 ? (
        <p>Inga texter publicerade än.</p>
      ) : (
        texts.map((text) => (
          <div key={text.id} className="mb-6 border-b pb-4">
            <h3 className="text-xl font-semibold">{text.title}</h3>
            <p className="text-gray-800 whitespace-pre-wrap">{text.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TextList;
