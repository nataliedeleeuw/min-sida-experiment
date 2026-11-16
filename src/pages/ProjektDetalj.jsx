
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import projektLista from "../Data/Projekt.json";
import Todo from "../components/Todo";
import Vader from "../components/Vader";
import CityWeather from "../components/CityWeather";
import Statistik from "../components/Statistik";
import "./ProjektDetalj.css";

function ProjektDetalj() {
  const { id } = useParams();

  const [vaderVy, setVaderVy] = useState("oversikt");

  const projekt = projektLista.find(
    (p) => p.id === Number(id)
  );

  if (!projekt) {
    return (
      <section className="projekt-detalj">
        <h2>Projektet finns inte.</h2>

        <Link to="/projekt">
          Tillbaka till projekten
        </Link>
      </section>
    );
  }

  const { titel, text, teknik, demo } = projekt;

  return (
    <section className="projekt-detalj">
      <Link
        className="projekt-detalj-tillbaka"
        to="/projekt"
      >
        ← Tillbaka till projekten
      </Link>

      <h1>{titel}</h1>

      <p className="projekt-detalj-beskrivning">
        {text}
      </p>

      {/* Kom ihåg-listan */}

      {demo === "todo" && (
        <div className="projekt-detalj-demo">
          <Todo />
        </div>
      )}

      {/* Väderkollen */}

      {demo === "vader" && (
        <div className="projekt-detalj-demo projekt-detalj-vader">

          <div className="vader-demo-intro">
            <h2>Prova Väderkollen</h2>

            <p>
              Välj hur du vill utforska vädret.
              Båda alternativen hämtar aktuell
              information från en vädertjänst.
            </p>
          </div>

          <div
            className="vader-demo-val"
            role="group"
            aria-label="Välj vädervy"
          >
            <button
              type="button"
              className={
                vaderVy === "oversikt"
                  ? "vader-demo-knapp aktiv"
                  : "vader-demo-knapp"
              }
              onClick={() => setVaderVy("oversikt")}
              aria-pressed={vaderVy === "oversikt"}
            >
              Jämför städer
            </button>

            <button
              type="button"
              className={
                vaderVy === "stad"
                  ? "vader-demo-knapp aktiv"
                  : "vader-demo-knapp"
              }
              onClick={() => setVaderVy("stad")}
              aria-pressed={vaderVy === "stad"}
            >
              Välj en stad
            </button>
          </div>

          <div className="vader-demo-innehall">
            {vaderVy === "oversikt" ? (
              <Vader />
            ) : (
              <CityWeather />
            )}
          </div>
        </div>
      )}

      {/* Statistikövningen hör till Min sida */}

      {projekt.id === 1 && (
        <div className="projekt-detalj-statistik">
          <p className="projekt-detalj-statistik-etikett">
            BAKOM KULISSERNA
          </p>

          <h2>En liten statistikövning</h2>

          <p className="projekt-detalj-statistik-beskrivning">
            Den här funktionen räknar automatiskt
            vilka tekniker som används i mina projekt.
            Staplarna visar hur många projekt som
            innehåller varje teknik, inte hur bra
            jag är på den.
          </p>

          <Statistik />
        </div>
      )}

      {/* Tekniker som används */}

      <div className="projekt-detalj-teknik">
        <h2>Tekniker som används</h2>

        <ul>
          {teknik.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjektDetalj;
