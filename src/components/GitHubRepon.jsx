
import { useState, useEffect } from "react";
import "./GitHubRepon.css";

const ANVANDARE = "nataliedeleeuw";

const API_URL =
  "https://api.github.com/users/" +
  ANVANDARE +
  "/repos?sort=updated&per_page=6";

function GitHubRepon() {
  const [repon, setRepon] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");
  const [sok, setSok] = useState("");

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
    
<label className="github-sok">
  Sök bland GitHub-projekt
  <input
    type="search"
    value={sok}
    onChange={(e) => setSok(e.target.value)}
    placeholder="Skriv ett projektnamn..."
  />
</label>


    {laddar && <p>Laddar repon...</p>}

    {fel && (
      <p className="github-fel" role="alert">
        {fel}
      </p>
    )}

    
{!laddar && !fel && (
  <ul className="github-lista">
    {repon
  .filter((r) => !r.fork)
  .filter((r) =>
    r.name.toLowerCase().includes(sok.toLowerCase())
  )
  .map((r) => (
      <li key={r.id} className="github-kort">
        <h3>
          <a href={r.html_url}>{r.name}</a>
        </h3>

       <p>{r.description || "Ingen beskrivning än."}</p>

<p>
  Senast uppdaterad: {new Date(r.updated_at).toLocaleDateString("sv-SE")}
</p>

        {r.language && (
          <span className="github-sprak">
            {r.language}
          </span>
        )}
      </li>
    ))}
  </ul>
)}

  </section>
);

}

export default GitHubRepon;
