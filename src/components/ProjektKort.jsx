
import "./ProjektKort.css";
import { Link } from "react-router-dom";

function ProjektKort({
  id,
  titel,
  text,
  bild,
  lank,
  demo,
  teknik,
  onValjTeknik
}) {
  const underPlanering = teknik.includes("Under planering");
  const arGithub = lank?.includes("github.com");
  const internLank = lank?.startsWith("/");

  const harDemo = demo === "todo" || demo === "vader";

  return (
    <article
      className={
        underPlanering
          ? "projekt-kort projekt-kort--planerat"
          : "projekt-kort"
      }
    >
      {!underPlanering && bild && (
        <img
          className="projekt-bild"
          src={bild}
          alt=""
        />
      )}

      <div className="projekt-info">
        {underPlanering && (
          <button
            type="button"
            className="projekt-kort-status"
            onClick={() => onValjTeknik("Under planering")}
          >
            Under planering
          </button>
        )}

        <h3>{titel}</h3>

        <p className="projekt-beskrivning">
          {text}
        </p>

        {!underPlanering && (
          <>
            <div className="projekt-tekniker">
              {teknik.includes("React") && (
                <button
                  type="button"
                  className="projekt-react-marke"
                  onClick={() => onValjTeknik("React")}
                >
                  Byggt med React
                </button>
              )}

              {teknik
                .filter((t) => t !== "React")
                .map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="projekt-teknik"
                    onClick={() => onValjTeknik(t)}
                  >
                    {t}
                  </button>
                ))}
            </div>

            <div className="projekt-lankar">
              <Link
                className="projekt-knapp"
                to={`/projekt/${id}`}
              >
                {harDemo ? "Prova funktionen" : "Läs mer"}
              </Link>

              {lank && (
                internLank ? (
                  <Link
                    className="projekt-knapp projekt-knapp--sekundar"
                    to={lank}
                  >
                    Prova funktionen
                  </Link>
                ) : (
                  <a
                    className="projekt-knapp projekt-knapp--sekundar"
                    href={lank}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {arGithub ? "Se koden" : "Se projektet"}
                  </a>
                )
              )}
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default ProjektKort;
