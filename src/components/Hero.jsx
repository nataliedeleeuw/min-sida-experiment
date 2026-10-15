import "./Hero.css";
import HeroImage from "../assets/Hero1.png";
import Header from "./Header";
function Hero({ namn, titel, stad }) {
  return (
    <section className="hero">
<div className="hero-content">
  <div className="hero-accent" aria-hidden="true">
  <span className="hero-sparkle">✳</span>
  <span className="hero-line"></span>
</div>

  <Header namn={namn} titel={titel} stad={stad} />
            <h2 id="hero-title">Välkommen till min webbplats!</h2>
            <p className="hero-text">Jag är en frontend-utvecklare som älskar att skapa användarvänliga och responsiva webbapplikationer. Jag har erfarenhet av React, JavaScript, HTML och CSS, och jag strävar alltid efter att förbättra mina färdigheter och lära mig nya tekniker.</p>
            <a className="hero-button" href="#kontakt">Kontakta mig</a>
        </div>
        <div className="hero-image">
            <img src={HeroImage} alt="Hero Image" />
        </div>
    </section>
  );
}

export default Hero;