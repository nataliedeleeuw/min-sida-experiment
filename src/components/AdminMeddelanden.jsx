
import { useEffect, useState } from "react";

function AdminMeddelanden() {
  const [meddelanden, setMeddelanden] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamtaMeddelanden() {
      try {
        const svar = await fetch("http://localhost:3001/kontakt");

        if (!svar.ok) {
          throw new Error("Kunde inte hämta meddelanden.");
        }

        const data = await svar.json();
        setMeddelanden(data);
      } catch {
        setFel("Kunde inte kontakta servern.");
      } finally {
        setLaddar(false);
      }
    }

    hamtaMeddelanden();
  }, []);

  return (
    <section>
      <h2>Inkomna meddelanden</h2>

      {laddar && <p>Hämtar meddelanden...</p>}

      {fel && <p role="alert">{fel}</p>}

      {!laddar && !fel && meddelanden.length === 0 && (
        <p>Inga meddelanden ännu.</p>
      )}

      {!laddar && !fel && meddelanden.map((meddelande) => (
        <article key={meddelande.id}>
          <h3>{meddelande.namn}</h3>
          <p>E-post: {meddelande.email}</p>
          <p>Meddelande: {meddelande.text}</p>
          <p>
            Datum: {new Date(meddelande.datum).toLocaleString("sv-SE")}
          </p>
          <hr />
        </article>
      ))}
    </section>
  );
}

export default AdminMeddelanden;
