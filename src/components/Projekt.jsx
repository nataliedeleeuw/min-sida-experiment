import "./Projekt.css";
import { useState } from "react";
import ProjektKort from "./ProjektKort";
import projektLista from "../Data/Projekt.json";
import bild1 from "../assets/Hero 2.webp";
import bild2 from "../assets/Hero 3.webp";
import bild3 from "../assets/Hero 4.webp";

const bilder = {
  "Hero 2.webp": bild1,
  "Hero 3.webp": bild2,
  "Hero 4.webp": bild3,
};

const filterLista = ["Alla", ...new Set(projektLista.flatMap((p) => p.teknik))];

function Projekt() {
  const [vald, setVald] = useState("Alla");
  const [sok, setSok] = useState("");

  const synligaProjekt = projektLista.filter((p) => {
    const rattTeknik = vald === "Alla" || p.teknik.includes(vald);
    const rattSok = p.titel.toLowerCase().includes(sok.toLowerCase()) ||
                    p.text.toLowerCase().includes(sok.toLowerCase());
    return rattTeknik && rattSok;
  });

  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-filter">
        {filterLista.map((f) => (
          <button
            key={f}
            type="button"
            className={f === vald ? "filter-knapp aktiv" : "filter-knapp"}
            onClick={() => setVald(f)}
            aria-pressed={f === vald}
          >
            {f}
          </button>
        ))}
      </div>

      <label className="projekt-sok">
        Sök projekt
        <input
          type="search"
          value={sok}
          onChange={(e) => setSok(e.target.value)}
          placeholder="t.ex. Min sida"
        />
      </label>

      <p className="projekt-antal" aria-live="polite">
        Visar {synligaProjekt.length} av {projektLista.length} projekt
      </p>

      {synligaProjekt.length === 0 ? (
        <p className="projekt-tom">
          Inga projekt matchar. Prova ett annat filter eller sökord.
        </p>
      ) : (
        <div className="projekt-lista">
          {synligaProjekt.map((p) => (
            <ProjektKort
              key={p.id}
              titel={p.titel}
              text={p.text}
              bild={bilder[p.bild]}
              lank={p.lank}
              teknik={p.teknik.join(", ")}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projekt;