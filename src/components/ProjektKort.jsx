import "./ProjektKort.css";
import { Link } from "react-router-dom";

function ProjektKort({ id, titel, text, bild, lank, teknik, onValjTeknik }) {
  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt="" />
      <div className="projekt-info">
        <h3>{titel}</h3>
        <p>{text}</p>
        {teknik.some((t) => t === "React") && (
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
          <div className="projekt-lankar">
  <Link
    className="projekt-knapp"
    to={`/projekt/${id}`}
  >
    Läs mer
  </Link>

  <a className="projekt-knapp" href={lank}>
    Se projektet
  </a>
</div>
      </div>
    </article>
  );
}

export default ProjektKort;