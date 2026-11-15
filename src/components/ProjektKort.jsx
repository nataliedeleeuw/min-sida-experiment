
import "./ProjektKort.css";
import { Link } from "react-router-dom";

function ProjektKort({
  id,
  titel,
  text,
  bild,
  lank,
  teknik,
  onValjTeknik
}) {
  const underPlanering = teknik.includes("Under planering");

  const arGithub = lank?.includes("github.com");
  const internLank = lank?.startsWith("/");

  return (
    <article className="projekt-kort">
      <img
        className="projekt-bild"
        src={bild}
        alt=""
      />

      <div className="projekt-info">
        <h3>{titel}</h3>

        <p>{text}</p>

        {!underPlanering && teknik.includes("React") && (
          <span className="projekt-react-marke">
            Byggt med React
          </span>
        )}

        <div className="projekt-tekniker">
          {teknik.map((t) => (
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

        {underPlanering ? (
          <p className="projekt-planerad">
            Mer information kommer när projektet
            tar form.
          </p>
        ) : (
          <div className="projekt-lankar">
            <Link
              className="projekt-knapp"
              to={`/projekt/${id}`}
            >
              Läs mer
            </Link>

            {lank && (
              internLank ? (
                <Link
                  className="projekt-knapp"
                  to={lank}
                >
                  Prova funktionen
                </Link>
              ) : (
                <a
                  className="projekt-knapp"
                  href={lank}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {arGithub
                    ? "Se koden"
                    : "Se projektet"}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjektKort;
