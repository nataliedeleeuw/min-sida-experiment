
import { useParams, Link } from "react-router-dom";
import projektLista from "../Data/Projekt.json";
import Todo from "../components/Todo";
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

      {demo === "todo" && (
        <div className="projekt-detalj-demo">
          <Todo />
        </div>
      )}

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
