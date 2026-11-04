
import { useParams, Link } from "react-router-dom";
import projektLista from "../Data/Projekt.json";
import "./ProjektDetalj.css";

function ProjektDetalj() {
  const { id } = useParams();

  const projekt = projektLista.find(
    (p) => p.id === Number(id)
  );

  if (!projekt) {
    return (
      <section className="projekt-detalj">
        <h2>Projektet finns inte.</h2>
        <Link to="/">Till startsidan</Link>
      </section>
    );
  }

  const { titel, text, teknik } = projekt;

  return (
    <section className="projekt-detalj">
      <h2>{titel}</h2>

      <p>{text}</p>

      <h3>Tekniker som används</h3>

      <ul>
        {teknik.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <Link to="/projekt">
        Tillbaka till projekten
      </Link>
    </section>
  );
}

export default ProjektDetalj;
