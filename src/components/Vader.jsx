import "./Vader.css";
import { useState, useEffect } from "react";
import { grader } from "../utils/text";
import { STADER } from "../Data/stader";

  const stader = [
  { namn: "Helsingborg", lat: 56.05, lon: 12.69 },
  { namn: "Stockholm", lat: 59.33, lon: 18.07 },
  { namn: "Kiruna", lat: 67.86, lon: 20.23 },
];  
const BAS_URL = "https://api.open-meteo.com/v1/forecast";
async function hamtaStad(stad) {
  const url = `${BAS_URL}?latitude=${stad.lat}&longitude=${stad.lon}&current=temperature_2m,wind_speed_10m`;
  const svar = await fetch(url);

  if (!svar.ok) {
    throw new Error("Kunde inte hämta " + stad.namn);
  }

  const data = await svar.json();

  return {
    namn: stad.namn,
    temp: data.current.temperature_2m,
    vind: data.current.wind_speed_10m,
  };
}
function Vader() {
  const [vader, setVader] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");
  const [uppdatering, setUppdatering] = useState(0);
  const [valdStad, setValdStad] = useState("Alla");
  useEffect(() => {
  async function hamta() {
  setLaddar(true);
  setFel("");
  setVader([]);

  try {
      const resultat = await Promise.all(STADER.map(hamtaStad));

      setVader(resultat);

      console.log("Väder för alla städer:", resultat);

    } catch {
      setFel("Kunde inte hämta vädret just nu.");

    } finally {
      setLaddar(false);
    }
  }

  hamta();
}, [uppdatering]);
const synligtVader = vader.filter((stad) => {
  return valdStad === "Alla" || stad.namn === valdStad;
});
    return (
  <section className="vader">
    <h2>Vädret just nu</h2>
    <div className="vader-val">
  <button
  type="button"
  onClick={() => setValdStad("Alla")}
  aria-pressed={valdStad === "Alla"}
>
  Alla
</button>

  {STADER.map((stad) => (
  <button
    type="button"
    key={stad.namn}
    onClick={() => setValdStad(stad.namn)}
    aria-pressed={valdStad === stad.namn}
  >
    {stad.namn}
  </button>
))}
</div>

    <button
  type="button"
  onClick={() => setUppdatering(uppdatering + 1)}
  disabled={laddar}
>
  {laddar ? "Hämtar..." : "Uppdatera vädret"}
</button>

    {laddar && <p>Laddar vädret...</p>}

    {fel && <p role="alert">{fel}</p>}

    <div className="vader-lista">
  {synligtVader.map((stad) => (
    <article className="vader-kort" key={stad.namn}>
      <h3>{stad.namn}</h3>
      <p>Temperatur: {grader(stad.temp)}</p>
      <p>Vindhastighet: {stad.vind} km/h</p>
    </article>
  ))}
</div>
  </section>
);
}
export default Vader;