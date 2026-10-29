import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import projektLista from "../data/projekt.json";
import bild1 from "../assets/Hero 2.webp";
import bild2 from "../assets/Hero 3.webp";
import bild3 from "../assets/Hero 4.webp";

const projekt = [

  {
    id: 2,
    titel: "Projekt 2",
    text: "Kommer snart.",
    bild: bild2,
    lank: "https://www.google.se",
    teknik: "Under planering",
  },
  {
    id: 3,
    titel: "Projekt 3",
    text: "Kommer snart.",
    bild: bild3,
    lank: "https://www.google.se",
    teknik: "Under planering",
  },
];

function Projekt() {
  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-lista">
        {projekt.map((ettProjekt) => (
        <ProjektKort
            key={ettProjekt.id}
            titel={ettProjekt.titel}
            text={ettProjekt.text}
            bild={ettProjekt.bild}
            lank={ettProjekt.lank}
            teknik={ettProjekt.teknik}
        />
))}
      </div>
    </section>
  );
}

export default Projekt;