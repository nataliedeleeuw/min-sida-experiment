
import "./Hero.css";

import HeroImage from "../assets/Hero1.webp";
import HeroDrowsy from "../assets/HeroDrowsy.webp";
import HeroSleepy from "../assets/HeroSleepy.webp";
import HeroAlmostAsleep from "../assets/HeroAlmostAsleep.webp";
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

  // Samma dimmerstyrka som tidigare
  const ljusstyrkor = [0.76, 0.88, 1, 1.08];

  // Fyra stadier av kattens trötthet
  const kvallsbilder = [
    {
      bild: HeroSleep,
      beskrivning: "Katten sover djupt under lampan"
    },
    {
      bild: HeroAlmostAsleep,
      beskrivning: "Katten håller precis på att somna"
    },
    {
      bild: HeroSleepy,
      beskrivning: "Katten är väldigt sömnig"
    },
    {
      bild: HeroDrowsy,
      beskrivning: "Katten försöker hålla sig vaken"
    }
  ];

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

            {/* Dagskatten */}

            <img
              src={HeroImage}
              className={
                ljusPa
                  ? "hero-cat synlig"
                  : "hero-cat"
              }
              alt="Katten sitter vaken och programmerar"
              aria-hidden={!ljusPa}
            />

            {/* De fyra kvällskatterna */}

            {kvallsbilder.map((katt, niva) => (

              <img
                key={niva}
                src={katt.bild}
                className={
                  !ljusPa && ljusNiva === niva
                    ? "hero-cat synlig"
                    : "hero-cat"
                }
                alt={katt.beskrivning}
                aria-hidden={ljusPa || ljusNiva !== niva}
                style={{
                  filter: `brightness(${ljusstyrkor[ljusNiva]})`,
                  transition:
                    "opacity 0.6s ease, filter 0.4s ease"
                }}
              />

            ))}

            {/* Den klickbara lampan */}

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

          {/* Dimmern visas bara i kvällsläge */}

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
