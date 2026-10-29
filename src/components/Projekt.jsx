import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import projektLista from "../data/projekt.json";
import bild1 from "../assets/Hero 2.webp";
import bild2 from "../assets/Hero 3.webp";
import bild3 from "../assets/Hero 4.webp";

const bilder = {
  "Hero 2.webp": bild1,
  "Hero 3.webp": bild2,
  "Hero 4.webp": bild3,
};

function Projekt() {
  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-lista">
        {projektLista.map((p) => (
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
    </section>
  );
}

export default Projekt;