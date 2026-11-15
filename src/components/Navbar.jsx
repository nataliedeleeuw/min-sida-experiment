
import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { NAMN } from "../Data/installningar";
import { initialer } from "../utils/text";

function Navbar({ ljusPa, vaxlaLjus }) {
  const [oppen, setOppen] = useState(false);

  function stangMeny() {
    setOppen(false);
  }

  return (
    <nav
      className="navbar"
      aria-label="Huvudnavigation"
    >
      <NavLink
        to="/"
        end
        className="logo"
        onClick={stangMeny}
        aria-label="Work in Progress, till startsidan"
      >
        <span className="logo-initialer">
          {initialer(NAMN)}
        </span>

        <span className="logo-text">
          Work in Progress
        </span>
      </NavLink>

      <div className="navbar-actions">
        <div
          id="huvudmeny"
          className={
            oppen
              ? "lankar oppen"
              : "lankar"
          }
        >
          <NavLink
            to="/"
            end
            onClick={stangMeny}
          >
            Hem
          </NavLink>

          <NavLink
            to="/om-mig"
            onClick={stangMeny}
          >
            Om mig
          </NavLink>

          <NavLink
            to="/kontakt"
            onClick={stangMeny}
          >
            Kontakt
          </NavLink>

          <NavLink
            to="/projekt"
            onClick={stangMeny}
          >
            Projekt
          </NavLink>
        </div>

        {/* Samma mörkerläge som kattens lampa */}
        <button
          type="button"
          className="tema-knapp"
          onClick={vaxlaLjus}
          aria-label="Mörkt läge"
          aria-pressed={!ljusPa}
          title={
            ljusPa
              ? "Växla till mörkt läge"
              : "Växla till ljust läge"
          }
        >
          {ljusPa ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </svg>
          )}
        </button>

        <button
          type="button"
          className="meny-knapp"
          onClick={() => setOppen(!oppen)}
          aria-expanded={oppen}
          aria-controls="huvudmeny"
          aria-label={oppen ? "Stäng meny" : "Öppna meny"}
        >
          {oppen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
