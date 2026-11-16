
import "./OmMig.css";

import portrait from "../assets/Portrait.webp";
import LasMer from "../components/LasMer";
import { lasTid } from "../utils/text";

const omMigText = `Jag heter Natalie och tycker om att lära mig nya saker.
Mina intressen är ganska blandade, men psykologi, skrivande
och teknik är några av dem. Nu har jag också börjat lära mig
programmering, vilket hittills verkar vara en ganska bra
kombination av problemlösning, kreativitet och att undra
varför något som fungerade för fem minuter sedan plötsligt
inte fungerar alls.`;

function OmMig() {
  return (
    <section className="om-mig" id="om-mig">
      <div className="om-mig-layout">

        {/* Personlig presentation */}

        <article className="om-mig-card">
          <p className="om-mig-etikett">
            ✳ Bakom skärmen
          </p>

          <h1>Om mig</h1>

          <p className="om-mig-brodtext">
            {omMigText}
          </p>

          <p className="om-mig-lastid">
            {lasTid(omMigText)}
          </p>

          <LasMer />
        </article>

        {/* Illustration */}

        <figure className="om-mig-portratt">
          <img
            className="om-mig-bild"
            src={portrait}
            alt="Illustrerat porträtt av Natalie vid datorn"
          />

          <figcaption className="om-mig-bildtext">
            Psykologi, skrivande och en hel del kod.
          </figcaption>
        </figure>

        {/* Det jag lär mig */}

        <section
          className="om-mig-kurs"
          aria-labelledby="om-mig-kurs-rubrik"
        >
          <h2 id="om-mig-kurs-rubrik">
            Det här lär jag mig i kursen
          </h2>

          <p className="om-mig-kurs-beskrivning">
            Några av teknikerna jag arbetar med just nu.
          </p>

          <ul className="om-mig-lista">
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

      </div>
    </section>
  );
}

export default OmMig;
