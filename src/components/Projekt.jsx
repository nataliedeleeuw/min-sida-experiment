import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import bild1 from "../assets/Hero 2.png";
import bild2 from "../assets/Hero 3.png";
import bild3 from "../assets/Hero 4.png";

function Projekt() {
  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-lista">
        <ProjektKort
          titel="Min portfoliosida"
          text="Sidan du tittar på nu. Byggd med React och CSS."
          bild={bild1}
          lank="https://www.google.se"
        />
        <ProjektKort titel="Projekt 2" text="Kommer snart." bild={bild2} lank="https://www.google.se"/>
        <ProjektKort titel="Projekt 3" text="Kommer snart." bild={bild3} lank="https://www.google.se"/>
      </div>
    </section>
  );
}

export default Projekt;