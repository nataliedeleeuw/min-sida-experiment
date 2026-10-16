import "./OmMig.css";
import portrait from "../assets/Portrait.png";
function OmMig() {
  return (
    <section className="om-mig" id="om-mig">
        <img
        className="om-mig-bild"
        src={portrait}
        alt="Illustrerat porträtt av Natalie"
       />
      <div className="om-mig-card">
        <h2>Om mig</h2>
        <p>
          Jag heter Natalie och tycker om att lära mig nya saker.
          Mina intressen är ganska blandade, men psykologi, skrivande
          och teknik är några av dem. Nu har jag också börjat lära mig
          programmering, vilket hittills verkar vara en ganska bra
          kombination av problemlösning, kreativitet och att undra
          varför något som fungerade för fem minuter sedan plötsligt
          inte fungerar alls.
        </p>
        <h3>Det här lär jag mig i kursen</h3>

        <ul className="om-mig-lista">
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
}

export default OmMig;