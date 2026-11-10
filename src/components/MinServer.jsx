
import { useState, useEffect } from "react";

function MinServer() {
  const [data, setData] = useState(null);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamtaServer() {
      try {
        const svar = await fetch("http://localhost:3001/hej");

        if (!svar.ok) {
          throw new Error("Servern svarade med ett fel.");
        }

        const resultat = await svar.json();
        setData(resultat);
      } catch {
        setFel("Kunde inte kontakta servern.");
      } finally {
        setLaddar(false);
      }
    }

    hamtaServer();
  }, []);

  return (
    <section className="min-server">
      <h2>Min egen server</h2>

      {laddar && <p>Hämtar information...</p>}

      {fel && <p role="alert">{fel}</p>}

      {data && !fel && (
        <div>
          <h3>{data.meddelande}</h3>
          <p>Namn: {data.namn}</p>
          <p>Roll: {data.roll}</p>

          <h4>Intressen</h4>
          <ul>
            {data.intressen.map((intresse) => (
              <li key={intresse}>{intresse}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default MinServer;
