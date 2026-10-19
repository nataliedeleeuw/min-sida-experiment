import "./Kontakt.css";
import KontaktBild from "../assets/Envelope.png";

function Kontakt() {
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

      <form className="kontakt-form">
        <label htmlFor="namn">Namn</label>
        <input type="text" id="namn" name="namn" placeholder="Ditt namn" />
        <label htmlFor="epost">E-post</label>
        <input type="email" id="epost" name="epost" placeholder="namn@exempel.se" />
        <label htmlFor="meddelande">Meddelande</label>
        <textarea id="meddelande" name="meddelande" rows="5" />
        <button type="submit">Skicka</button>
      </form>
    </section>
  );
}

export default Kontakt;