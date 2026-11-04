import './Footer.css';
import { Link } from "react-router-dom";
import { copyright } from "../utils/text";

function Footer() {

  return (
    <footer className="footer" id="kontakt">
      <p>
  <a
    href="https://se.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    {copyright("Natalie de Leeuw")}
  </a>
</p>
      <p>
  <Link to="/kontakt">Kontakt</Link>
</p>
      <p>Gjord med React 🧁</p>
    </footer>
  );
}

export default Footer;