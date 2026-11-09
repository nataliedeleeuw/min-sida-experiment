
import "./Hero.css";

import HeroImage from "../assets/Hero1.webp";
import HeroSleep from "../assets/HeroSleep.webp";

import Header from "./Header";
import Raknare from "./Raknare";

import { Link } from "react-router-dom";
import { halsning } from "../utils/text";

function Hero({
  namn,
  titel,
  stad,
  ljusPa,
  vaxlaLjus,
  ljusNiva,
  setLjusNiva
}) {

  const ljusstyrkor = [0.76, 0.88, 1, 1.08];

  return (
    <section className={ljusPa ? "hero" : "hero hero-natt"}>

      <div className="hero-content">

        <div className="hero-accent" aria-hidden="true">
          <span className="hero-sparkle">✳</span>
          <span className="hero-line"></span>
        </div>

        <Header namn={namn} titel={titel} stad={stad} />

        <p className="hero-intro">
          {halsning()}, jag heter {namn}!
        </p>

        <h2 id="hero-title">
          Välkommen till min portfolio!
        </h2>

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

        <div className="hero-visual">

          <div className="hero-illustration">

            <img
              src={HeroImage}
              className={ljusPa ? "hero-cat synlig" : "hero-cat"}
              alt="Katten sitter och programmerar"
              aria-hidden={!ljusPa}
            />

            <img
              src={HeroSleep}
              className={!ljusPa ? "hero-cat synlig" : "hero-cat"}
              alt="Katten sover under en varm lampa"
              aria-hidden={ljusPa}
              style={{
                filter: `brightness(${ljusstyrkor[ljusNiva]})`,
                transition: "opacity 0.6s ease, filter 0.4s ease"
              }}
            />

            <button
              type="button"
              className="hero-lampa"
              onClick={vaxlaLjus}
              aria-label={
                ljusPa
                  ? "Växla till kvällsläge"
                  : "Växla till dagsläge"
              }
              aria-pressed={!ljusPa}
              title="Klicka på lampan"
            />

          </div>

          {!ljusPa && (
            <Raknare
              ljusNiva={ljusNiva}
              setLjusNiva={setLjusNiva}
            />
          )}

        </div>

        {ljusPa && (
          <p className="hero-lamptips">
            Klicka på lampan
          </p>
        )}

      </div>

    </section>
  );
}

export default Hero;
