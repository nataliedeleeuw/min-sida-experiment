
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
      const svar = await fetch(API_URL);
      const data = await svar.json();

      console.log(data);
      setRepon(data);
    }

    hamta();
  }, []);

  return <p>Antal repon: {repon.length}</p>;
}

export default GitHubRepon;
