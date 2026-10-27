import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">Work in Progress</span>
  <div className="lankar">
    <Link to="/">Hem</Link>
    <Link to="/om-mig">Om mig</Link>
    <Link to="/kontakt">Kontakt</Link>
    <Link to="/projekt">Projekt</Link>
  </div>
    </nav>
  );
}

export default Navbar;