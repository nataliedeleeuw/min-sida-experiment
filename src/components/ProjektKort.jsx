import "./ProjektKort.css";

function ProjektKort({ titel, text, bild, lank, teknik, onValjTeknik }) {
  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt="" />
      <div className="projekt-info">
        <h3>{titel}</h3>
        <p>{text}</p>
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
          <a className="projekt-knapp" href={lank}>Se projektet </a>
      </div>
    </article>
  );
}

export default ProjektKort;