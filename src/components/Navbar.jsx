import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">Work in Progress</span>
  <div className="lankar">
    <Link to="/">Hem</Link>
    <Link to="/om-mig">Om mig</Link>
    <a href="#kontakt">Kontakt</a>
    <a href="/#projekt">Projekt</a>
  </div>
    </nav>
  );
}

export default Navbar;