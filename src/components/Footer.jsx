import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
  const år = new Date().getFullYear();

  return (
    <footer className="footer" id="kontakt">
      <p>
  © {år}{" "}
  <a
    href="https://se.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Natalie de Leeuw
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