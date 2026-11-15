
import { useState } from "react";
import Projekt from "../components/Projekt";
import GitHubRepon from "../components/GitHubRepon";
import "./ProjektSida.css";

function ProjektSida() {
  const [visaGitHub, setVisaGitHub] = useState(false);

  return (
    <main className="projekt-sida">
      <header className="projekt-sida-intro">
        <p className="projekt-sida-etikett">
          WORK IN PROGRESS
        </p>

        <h1>Från idé till fungerande kod.</h1>

        <p>
          Här samlar jag det jag bygger under min
          utbildning inom programmering. En blandning
          av problemlösning, kreativitet och saker
          som faktiskt fungerar. Oftast.
        </p>
      </header>

      <Projekt />

      <section className="projekt-github">
        <div className="projekt-github-intro">
          <div>
            <p className="projekt-sida-etikett">
              BAKOM KULISSERNA
            </p>

            <h2>Nyfiken på koden?</h2>

            <p>
              På GitHub finns mina kodprojekt och
              de senaste uppdateringarna.
            </p>
          </div>

          <button
            type="button"
            className="projekt-github-knapp"
            onClick={() => setVisaGitHub(!visaGitHub)}
            aria-expanded={visaGitHub}
            aria-controls="github-aktivitet"
          >
            {visaGitHub
              ? "Dölj GitHub-aktivitet"
              : "Visa GitHub-aktivitet"}
          </button>
        </div>

        {visaGitHub && (
          <div
            id="github-aktivitet"
            className="projekt-github-innehall"
          >
            <GitHubRepon />
          </div>
        )}
      </section>
    </main>
  );
}

export default ProjektSida;
