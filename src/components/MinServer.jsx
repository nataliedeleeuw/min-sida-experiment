
import { useState, useEffect } from "react";

function MinServer() {
  const [data, setData] = useState(null);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");
  const [slumptal, setSlumptal] = useState(null);

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

async function hamtaSlumptal() {
  try {
    const svar = await fetch("http://localhost:3001/slump");

    if (!svar.ok) {
      throw new Error("Kunde inte hämta slumptalet.");
    }

    const resultat = await svar.json();
    setSlumptal(resultat.slumptal);
  } catch {
    setFel("Kunde inte hämta slumptalet.");
  }
}

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

<h4>Slumpgenerator</h4>
<button type="button" onClick={hamtaSlumptal}>
  Slumpa ett tal
</button>

{slumptal !== null && (
  <p>Ditt slumptal är: {slumptal}</p>
)}

        </div>
      )}
    </section>
  );
}

export default MinServer;
