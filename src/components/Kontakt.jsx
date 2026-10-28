import  "./Kontakt.css";
import KontaktBild from "../assets/Envelope.webp";
import { useState } from "react";


function Kontakt() {
  const [namn, setNamn] = useState("");
  const [email, setEmail] = useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skickat, setSkickat] = useState(false);
  const [fel, setFel] = useState("");
  const [skickar, setSkickar] = useState(false);
  async function handleSubmit(e) {
  e.preventDefault();

  if (skickar) return;

  setFel("");
  setSkickat(false);

  if (
    namn.trim() === "" ||
    email.trim() === "" ||
    meddelande.trim() === ""
  ) {
    setFel("Fyll i alla fält.");
    return;
  }

  if (!email.includes("@")) {
    setFel("Skriv en e-postadress som innehåller @.");
    return;
  }

  setSkickar(true);

  try {
    const svar = await fetch("https://formspree.io/f/xzeeggbe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ namn, email, meddelande }),
    });

    if (svar.ok) {
      setSkickat(true);
      setEmail("");
      setMeddelande("");
    } else {
      setFel("Något gick fel. Försök igen om en stund.");
    }
  } catch {
    setFel("Kunde inte skicka. Kontrollera anslutningen och försök igen.");
  } finally {
    setSkickar(false);
  }
}
  return (
    <section className="kontakt">
      <div className="kontakt-info">
        <h2>Kontakta mig</h2>
        <p className="kontakt-text">Har du en fråga? Skriv ett meddelande!</p>
          <img
              className="kontakt-bild"
                src={KontaktBild}
              alt="Illustration av ett kuvert med ett meddelande"
          />
      </div>
          {skickat ? (
          <p className="form-tack">
            Tack {namn}! Ditt meddelande har skickats.
          </p>
) : (
      <form
            className="kontakt-form"
            onSubmit={handleSubmit}
            noValidate
      >
        <label htmlFor="namn">Namn</label>
        <input
            type="text"
            id="namn"
            name="namn"
            placeholder="Ditt namn"
            value={namn}
            onChange={(e) => setNamn(e.target.value)}
            
        />
        <label htmlFor="epost">E-post</label>
        <input
            type="email"
            id="epost"
            name="epost"
            placeholder="namn@exempel.se"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="meddelande">Meddelande</label>
        <textarea
            id="meddelande"
            name="meddelande"
            rows="5"
            value={meddelande}
            onChange={(e) => setMeddelande(e.target.value)}
        />
        <button type="submit" disabled={skickar}>
        {skickar ? "Skickar..." : "Skicka"}
        </button>

        {fel && <p className="form-fel">{fel}</p>}
      </form>
      )}
    </section>
  );
}

export default Kontakt;