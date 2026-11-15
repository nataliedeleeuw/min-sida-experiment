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
  const kvallslagen = [
    {
      bild: HeroDrowsy,
      alt: "Katten sitter under lampan och ser småtrött men vaken ut.",
      label: "Kvällsljus · Ljust",
      brightness: 0.74,
      contrast: 1.02
    },
    {
      bild: HeroSleepy,
      alt: "Katten sitter under lampan och börjar gäspa.",
      label: "Kvällsljus · Mysigt",
      brightness: 0.96,
      contrast: 1.02
    },
    {
      bild: HeroAlmostAsleep,
      alt: "Katten sitter under lampan och håller på att somna.",
      label: "Kvällsljus · Sömnigt",
      brightness: 1.10,
      contrast: 1.03
    },
    {
      bild: HeroSleep,
      alt: "Katten har somnat under lampan och drömmer.",
      label: "Kvällsljus · Zzz",
      brightness: 1.20,
      contrast: 1.04
    }
  ];

  const aktivtKvallslage =
    kvallslagen[
      Math.max(0, Math.min(ljusNiva, kvallslagen.length - 1))
    ];

  const aktuellBild = ljusPa ? HeroImage : aktivtKvallslage.bild;
  const aktuellAlt = ljusPa
    ? "Katten sitter pigg och programmerar under lampan."
    : aktivtKvallslage.alt;

  return (
    <section
      className={ljusPa ? "hero" : "hero hero-natt"}
      data-ljuslage={ljusPa ? "dag" : String(ljusNiva)}
    >
      <div className="hero-content">
        <div className="hero-accent" aria-hidden="true">
          <span className="hero-sparkle">✳</span>
          <span className="hero-line"></span>
        </div>

        <Header namn={namn} titel={titel} stad={stad} />

        <p className="hero-intro">
          {halsning()}, jag heter {namn}!
        </p>

        <h2>Välkommen till min portfolio!</h2>

        <p className="hero-text">
          Jag har precis börjat plugga programmering.
          Den här sidan är ett av våra första projekt på utbildningen,
          så just nu testar jag mig fram och försöker undvika att vara
          allt för besatt. Tanken är att fylla på med fler saker allt
          eftersom vi lär oss mer.
        </p>

        <Link className="hero-button" to="/projekt">
          Se mina projekt
        </Link>
      </div>

      <div className="hero-image">
        <div className="hero-visual-wrap">
          <div className="hero-visual">
            <img
              src={aktuellBild}
              alt={aktuellAlt}
              className="hero-cat-image"
              style={
                ljusPa
                  ? undefined
                  : {
                      filter: `brightness(${aktivtKvallslage.brightness}) contrast(${aktivtKvallslage.contrast})`
                    }
              }
            />

            <button
              type="button"
              className="hero-lamp-hitbox"
              onClick={vaxlaLjus}
              aria-label={
                ljusPa
                  ? "Byt till kvällsläge"
                  : "Byt till dagsläge"
              }
              title={
                ljusPa
                  ? "Byt till kvällsläge"
                  : "Byt till dagsläge"
              }
            />
          </div>

          {ljusPa ? (
            <p className="hero-hint">Klicka på lampan</p>
          ) : (
            <div className="hero-dimmer-panel">
              <Raknare
                ljusNiva={ljusNiva}
                setLjusNiva={setLjusNiva}
                etikett={aktivtKvallslage.label}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;