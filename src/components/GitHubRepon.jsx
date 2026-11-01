
import { useState, useEffect } from "react";

const ANVANDARE = "nataliedeleeuw";

const API_URL =
  "https://api.github.com/users/" +
  ANVANDARE +
  "/repos?sort=updated&per_page=6";

function GitHubRepon() {
  const [repon, setRepon] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamta() {
  try {
    const svar = await fetch(API_URL);

    if (!svar.ok) {
      throw new Error("Svar: " + svar.status);
    }

    const data = await svar.json();
    setRepon(data);

  } catch {
    setFel("Kunde inte hämta repon från GitHub just nu. Försök igen om en stund.");

  } finally {
    setLaddar(false);
  }
}

    hamta();
  }, []);

  
return (
  <section className="github">
    <h2>Senast på GitHub</h2>

    {laddar && <p>Laddar repon...</p>}

    {fel && (
      <p className="github-fel" role="alert">
        {fel}
      </p>
    )}

    {!laddar && !fel && (
      <p>Antal repon: {repon.length}</p>
    )}
  </section>
);

}

export default GitHubRepon;
