import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (koleksiyon) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = collection(db, koleksiyon);

    const unsub = onSnapshot(
      ref,
      (snap) => {
        let dizi = [];
        snap.docs.forEach((doc) => {
          dizi.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(dizi);
        setError(null);
      },
      (error) => {
        console.log(error.message);
        setError("Verilere Erişilemedi");
      }
    );

    return () => unsub();
  }, [koleksiyon]);

  return { documents, error };
};
