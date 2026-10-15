import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import bild1 from "../assets/Hero2.png";
import bild2 from "../assets/Hero3.png";
import bild3 from "../assets/Hero4.png";

function Projekt() {
  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-lista">
        <ProjektKort
          titel="Min portfoliosida"
          text="Sidan du tittar på nu. Byggd med React och CSS."
          bild={bild1}
        />
        <ProjektKort titel="Projekt 2" text="Kommer snart." bild={bild2} />
        <ProjektKort titel="Projekt 3" text="Kommer snart." bild={bild3} />
      </div>
    </section>
  );
}

export default Projekt;