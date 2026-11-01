
import { useState, useEffect } from "react";

const API_URL = "https://api.github.com/users/nataliedeleeuw";

function GitHubProfil() {
  const [profil, setProfil] = useState(null);

  useEffect(() => {
    async function hamtaProfil() {
      const svar = await fetch(API_URL);
      const data = await svar.json();

      setProfil(data);
    }

    hamtaProfil();
  }, []);

  
if (!profil) {
  return <p>Laddar profil...</p>;
}

return (
  <section className="github-profil">
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
  </section>
);

}

export default GitHubProfil;
