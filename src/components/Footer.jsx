
import "./Footer.css";

import { Link } from "react-router-dom";
import { copyright } from "../utils/text";
import { NAMN, EPOST } from "../Data/installningar";

function Footer() {
  return (
    <footer className="footer" id="kontakt">
      <div className="footer-inner">

        <div className="footer-identitet">
          <p className="footer-copyright">
            {copyright(NAMN)}
          </p>

          <p className="footer-react">
            Gjord med React 🧁
          </p>
        </div>

        <div className="footer-contact">
          <a
            className="footer-epost"
            href={`mailto:${EPOST}`}
          >
            {EPOST}
          </a>

          <Link
            className="footer-hej"
            to="/kontakt"
          >
            Säg hej
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
