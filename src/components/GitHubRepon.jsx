
import { useState, useEffect } from "react";
import "./GitHubRepon.css";
import "./GitHubProfil.css";

const ANVANDARE = "nataliedeleeuw";

const API_URL =
  "https://api.github.com/users/" +
  ANVANDARE +
  "/repos?sort=updated&per_page=6";
const PROFIL_URL = "https://api.github.com/users/nataliedeleeuw";

function GitHubRepon() {
  const [repon, setRepon] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");
  const [sok, setSok] = useState("");
  const [profil, setProfil] = useState(null);

  useEffect(() => {
    async function hamta() {
  try {
    const [profilSvar, reponSvar] = await Promise.all([
  fetch(PROFIL_URL),
  fetch(API_URL),
]);

if (!profilSvar.ok || !reponSvar.ok) {
  throw new Error("Kunde inte hämta GitHub-information.");
}

const [profilData, reponData] = await Promise.all([
  profilSvar.json(),
  reponSvar.json(),
]);

setProfil(profilData);
setRepon(reponData);

console.log("GitHub-profil hämtad:", profilData.login);

  } catch {
    setFel("Kunde inte hämta repon från GitHub just nu. Försök igen om en stund.");

  } finally {
    setLaddar(false);
  }
}

    hamta();
  }, []);
const synligaRepon = repon.filter((r) =>
  !r.fork &&
  r.name.toLowerCase().includes(sok.toLowerCase())
);
  
return (
  <section className="github">
    {profil && !fel && (
  <div className="github-profil">
    <img
      src={profil.avatar_url}
      alt="Min GitHub-profilbild"
      width="100"
      height="100"
    />

    <div>
      <h2>{profil.name || profil.login}</h2>
      <p>Offentliga repositories: {profil.public_repos}</p>
    </div>
  </div>
)}
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

    {!laddar && !fel && synligaRepon.length === 0 && (
  <p>Inga GitHub-projekt matchar din sökning.</p>
)}
{!laddar && !fel && (
  <ul className="github-lista">
    {synligaRepon.map((r) => (
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
