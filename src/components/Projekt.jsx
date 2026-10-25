import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import bild1 from "../assets/Hero 2.png";
import bild2 from "../assets/Hero 3.png";
import bild3 from "../assets/Hero 4.png";

const projekt = [
  {
    id: 1,
    titel: "Min portfoliosida",
    text: "Sidan du tittar på nu. Byggd med React och CSS.",
    bild: bild1,
    lank: "https://www.google.se",
    teknik: "React / CSS",
  },
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