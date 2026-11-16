
import "./Projekt.css";

import { useState } from "react";
import ProjektKort from "./ProjektKort";
import projektLista from "../Data/Projekt.json";

import bild1 from "../assets/Hero 2.webp";
import bild2 from "../assets/Hero 3.webp";
import bild3 from "../assets/Hero 4.webp";
import bild4 from "../assets/Hero 5.webp";

import { antalProjekt } from "../utils/text";

const bilder = {
  "Hero 2.webp": bild1,
  "Hero 3.webp": bild2,
  "Hero 4.webp": bild3,
  "Hero 5.webp": bild4,
};

const filterLista = [
  "Alla",
  ...new Set(
    projektLista.flatMap((projekt) => projekt.teknik)
  ),
];

function Projekt() {
  const [vald, setVald] = useState("Alla");
  const [sok, setSok] = useState("");
  const [sortering, setSortering] = useState("standard");
  const [visaFilter, setVisaFilter] = useState(false);

  const harAktivaVal =
    vald !== "Alla" || sortering !== "standard";

  function valjTeknik(teknik) {
    setVald(teknik);
    setVisaFilter(true);
  }

  function aterstallVal() {
    setVald("Alla");
    setSortering("standard");
  }

  // Filtrera efter teknik och sökord.
  const synligaProjekt = projektLista.filter((projekt) => {
    const rattTeknik =
      vald === "Alla" || projekt.teknik.includes(vald);

    const sokord = sok.trim().toLowerCase();

    const rattSok =
      projekt.titel.toLowerCase().includes(sokord) ||
      projekt.text.toLowerCase().includes(sokord);

    return rattTeknik && rattSok;
  });

  // Sortera utan att ändra originalistan.
  const sorteradeProjekt = [...synligaProjekt].sort((a, b) => {
    if (sortering === "titel") {
      return a.titel.localeCompare(b.titel, "sv");
    }

    if (sortering === "tekniker") {
      return b.teknik.length - a.teknik.length;
    }

    // Standard: visa färdiga projekt före planerade.
    const aPlanerat = a.teknik.includes("Under planering") ? 1 : 0;
    const bPlanerat = b.teknik.includes("Under planering") ? 1 : 0;

    return aPlanerat - bPlanerat;
  });

  return (
    <section
      className="projekt"
      id="projekt"
      aria-labelledby="projekt-rubrik"
    >
      <h2 id="projekt-rubrik">Mina projekt</h2>

      <div className="projekt-verktyg">
        <div className="projekt-verktygsrad">

          {/* Sökningen är alltid synlig */}

          <label className="projekt-sok">
            Sök projekt

            <input
              type="search"
              value={sok}
              onChange={(e) => setSok(e.target.value)}
              placeholder="Sök efter ett projekt..."
            />
          </label>

          {/* Öppna eller stäng fler alternativ */}

          <button
            type="button"
            className={
              harAktivaVal
                ? "projekt-filter-toggle har-aktiva-val"
                : "projekt-filter-toggle"
            }
            onClick={() => setVisaFilter(!visaFilter)}
            aria-expanded={visaFilter}
            aria-controls="projekt-filter-panel"
          >
            <span>Filter och sortering</span>

            {harAktivaVal && (
              <span
                className="projekt-filter-markering"
                aria-label="Aktiva val"
              >
                Aktivt
              </span>
            )}

            <span
              className="projekt-filter-symbol"
              aria-hidden="true"
            >
              {visaFilter ? "−" : "+"}
            </span>
          </button>
        </div>

        {/* Alla övningsfunktioner finns kvar */}

        <div
          id="projekt-filter-panel"
          className="projekt-filter-panel"
          hidden={!visaFilter}
        >
          <label className="projekt-sortering">
            Sortera projekt

            <select
              value={sortering}
              onChange={(e) => setSortering(e.target.value)}
            >
              <option value="standard">
                Färdiga först
              </option>

              <option value="titel">
                Titel A–Ö
              </option>

              <option value="tekniker">
                Flest tekniker först
              </option>
            </select>
          </label>

          <div className="projekt-filter-wrap">
            <p className="projekt-filter-etikett">
              Filtrera efter teknik
            </p>

            <div
              className="projekt-filter"
              role="group"
              aria-label="Filtrera projekt"
            >
              {filterLista.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={
                    filter === vald
                      ? "filter-knapp aktiv"
                      : "filter-knapp"
                  }
                  onClick={() => setVald(filter)}
                  aria-pressed={filter === vald}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {harAktivaVal && (
            <button
              type="button"
              className="projekt-filter-rensa"
              onClick={aterstallVal}
            >
              Återställ filter och sortering
            </button>
          )}
        </div>
      </div>

      <p className="projekt-antal" aria-live="polite">
        {antalProjekt(
          synligaProjekt.length,
          projektLista.length
        )}
      </p>

      {synligaProjekt.length === 0 ? (
        <p className="projekt-tom">
          Inga projekt matchar din sökning.
          Prova ett annat sökord eller filter.
        </p>
      ) : (
        <div className="projekt-lista">
          {sorteradeProjekt.map((projekt) => (
            <ProjektKort
              key={projekt.id}
              id={projekt.id}
              titel={projekt.titel}
              text={projekt.text}
              bild={bilder[projekt.bild]}
              lank={projekt.lank}
              demo={projekt.demo}
              teknik={projekt.teknik}
              onValjTeknik={valjTeknik}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projekt;
