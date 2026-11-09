import "./Hero.css";
import HeroImage from "../assets/Hero1.webp";
import HeroSleep from "../assets/HeroSleep.webp";
import Header from "./Header";
import { Link } from "react-router-dom";
import { halsning } from "../utils/text";

function Hero({ namn, titel, stad, ljusPa, vaxlaLjus }) {
  return (
    <section className="hero">
<div className="hero-content">
  <div className="hero-accent" aria-hidden="true">
  <span className="hero-sparkle">✳</span>
  <span className="hero-line"></span>
</div>

  <Header namn={namn} titel={titel} stad={stad} />
  <p className="hero-intro">
  {halsning()}, jag heter {namn}!
</p>
            <h2 id="hero-title">Välkommen till min portfolio!</h2>
            <p className="hero-text">
                Jag har precis börjat plugga programmering.
                Den här sidan är ett av våra första projekt på utbildningen,
                så just nu testar jag mig fram och försöker undvika att vara
                allt för besatt. Tanken är att fylla på med fler saker
                allt eftersom vi lär oss mer.
            </p>
            <Link className="hero-button" to="/projekt">
                Se mina projekt
            </Link>
        </div>
<div className="hero-image">
  <img
    src={ljusPa ? HeroImage : HeroSleep}
    alt={ljusPa ? "Katten programmerar" : "Katten sover"}
  />

  <button
    type="button"
    className="hero-ljusknapp"
    onClick={vaxlaLjus}
  >
    {ljusPa ? "Släck lampan" : "Tänd lampan"}
  </button>
</div>
    </section>
  );
}

export default Hero;