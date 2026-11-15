
import "./Footer.css";
import { Link } from "react-router-dom";
import { copyright } from "../utils/text";
import { NAMN, EPOST } from "../Data/installningar";

function Footer() {
  return (
    <footer className="footer" id="kontakt">
      <p>{copyright(NAMN)}</p>

      <p>
        <Link to="/kontakt">
          Kontakt
        </Link>
      </p>

      <p>
        <a href={`mailto:${EPOST}`}>
          {EPOST}
        </a>
      </p>

      <p>Gjord med React 🧁</p>
    </footer>
  );
}

export default Footer;
