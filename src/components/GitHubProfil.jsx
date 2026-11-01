
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

  return (
    <p>
      {profil ? profil.name || profil.login : "Laddar profil..."}
    </p>
  );
}

export default GitHubProfil;
