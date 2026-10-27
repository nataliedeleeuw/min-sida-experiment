import './Navbar.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [oppen, setOppen] = useState(false);

  return (
    <nav className="navbar">
      <span className="logo">Work in Progress</span>
      <button
  type="button"
  className="meny-knapp"
  onClick={() => setOppen(!oppen)}
  aria-expanded={oppen}
  aria-controls="huvudmeny"
  aria-label="Meny"
>
  {oppen ? "✕" : "☰"}
</button>
  <div
  id="huvudmeny"
  className={oppen ? "lankar oppen" : "lankar"}
>
<NavLink to="/" end onClick={() => setOppen(false)}>
  Hem
</NavLink>

<NavLink to="/om-mig" onClick={() => setOppen(false)}>
  Om mig
</NavLink>

<NavLink to="/kontakt" onClick={() => setOppen(false)}>
  Kontakt
</NavLink>

<NavLink to="/projekt" onClick={() => setOppen(false)}>
  Projekt
</NavLink>
  </div>
    </nav>
  );
}

export default Navbar;