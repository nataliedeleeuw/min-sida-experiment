import "./Hero.css";
import HeroImage from "../assets/Hero1.png";
import Header from "./Header";
import { Link } from "react-router-dom";

function Hero({ namn, titel, stad }) {
  return (
    <section className="hero">
<div className="hero-content">
  <div className="hero-accent" aria-hidden="true">
  <span className="hero-sparkle">✳</span>
  <span className="hero-line"></span>
</div>

  <Header namn={namn} titel={titel} stad={stad} />
            <h2 id="hero-title">Välkommen till min portfolio!</h2>
            <p className="hero-text"> Hej! Jag heter Natalie och har precis börjat plugga programmering. Den här sidan är ett av våra första projekt på utbildningen, så just nu testar jag mig fram och försöker undvika att vara allt för besatt. Tanken är att fylla på med fler saker allt eftersom vi lär oss mer.</p>
            <Link className="hero-button" to="/projekt">
                Se mina projekt
            </Link>
        </div>
        <div className="hero-image">
            <img src={HeroImage} alt="Hero Image" />
        </div>
    </section>
  );
}

export default Hero;