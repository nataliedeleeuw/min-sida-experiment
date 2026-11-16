
import "./Kontakt.css";
import KontaktBild from "../assets/Envelope.webp";
import { useState } from "react";

const MAX_TECKEN = 500;

function Kontakt() {
  const [namn, setNamn] = useState("");
  const [email, setEmail] = useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skickat, setSkickat] = useState(false);
  const [fel, setFel] = useState("");
  const [skickar, setSkickar] = useState(false);

  const kvar = MAX_TECKEN - meddelande.length;

  async function handleSubmit(e) {
    e.preventDefault();

    if (skickar) return;

    setFel("");

    if (
      namn.trim() === "" ||
      email.trim() === "" ||
      meddelande.trim() === ""
    ) {
      setFel("Fyll i alla fält innan du skickar.");
      return;
    }

    const giltigEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email.trim()
    );

    if (!giltigEmail) {
      setFel("Kontrollera att e-postadressen är korrekt.");
      return;
    }

    if (meddelande.length > MAX_TECKEN) {
      setFel("Meddelandet är för långt.");
      return;
    }

    setSkickar(true);

    try {
      const svar = await fetch(
        "https://formspree.io/f/xzeeggbe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            namn: namn.trim(),
            email: email.trim(),
            meddelande: meddelande.trim(),
          }),
        }
      );

      if (!svar.ok) {
        throw new Error("Kunde inte skicka meddelandet.");
      }

      setSkickat(true);
      setEmail("");
      setMeddelande("");
    } catch {
      setFel(
        "Meddelandet kunde inte skickas. Försök igen om en stund."
      );
    } finally {
      setSkickar(false);
    }
  }

  function nyttMeddelande() {
    setSkickat(false);
    setNamn("");
    setEmail("");
    setMeddelande("");
    setFel("");
  }

  return (
    <section className="kontakt">
      <div className="kontakt-layout">

        {/* Introduktion */}

        <div className="kontakt-info">
          <p className="kontakt-etikett">
            SÄG HEJ
          </p>

          <h1>Kontakta mig</h1>

          <p className="kontakt-text">
            Har du en fråga eller vill du säga hej?
            Skicka gärna ett meddelande!
          </p>
        </div>

        {/* Formulär eller tackmeddelande */}

        {skickat ? (
          <div className="kontakt-form">
            <h2>Tack för ditt meddelande!</h2>

            <p className="form-tack" role="status">
              Tack {namn}! Ditt meddelande har skickats.
            </p>

            <p>
              Jag återkommer så snart jag kan.
            </p>

            <button
              type="button"
              onClick={nyttMeddelande}
            >
              Skicka ett nytt meddelande
            </button>
          </div>
        ) : (
          <form
            className="kontakt-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <label htmlFor="namn">
              Namn
            </label>

            <input
              type="text"
              id="namn"
              name="namn"
              placeholder="Ditt namn"
              value={namn}
              onChange={(e) => setNamn(e.target.value)}
              autoComplete="name"
              maxLength={100}
              required
            />

            <label htmlFor="epost">
              E-post
            </label>

            <input
              type="email"
              id="epost"
              name="epost"
              placeholder="namn@exempel.se"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              maxLength={150}
              required
            />

            <label htmlFor="meddelande">
              Meddelande
            </label>

            <textarea
              id="meddelande"
              name="meddelande"
              rows="5"
              value={meddelande}
              onChange={(e) =>
                setMeddelande(e.target.value)
              }
              maxLength={MAX_TECKEN}
              required
            />

            <p
              className={
                kvar < 50
                  ? "tecken-kvar varning"
                  : "tecken-kvar"
              }
              aria-live="polite"
            >
              {kvar} tecken kvar
            </p>

            {fel && (
              <p className="form-fel" role="alert">
                {fel}
              </p>
            )}

            <button
              type="submit"
              disabled={skickar}
            >
              {skickar
                ? "Skickar..."
                : "Skicka meddelande"}
            </button>
          </form>
        )}

        {/* Illustration */}

        <div className="kontakt-illustration">
          <img
            className="kontakt-bild"
            src={KontaktBild}
            alt="Illustration av ett kuvert med ett meddelande"
          />
        </div>

      </div>
    </section>
  );
}

export default Kontakt;
