
import { useState } from "react";
import "./LasMer.css";

function LasMer() {
  const [visas, setVisas] = useState(false);

  return (
    <div className="las-mer">
      <button
        type="button"
        className="las-mer-knapp"
        onClick={() => setVisas(!visas)}
        aria-expanded={visas}
        aria-controls="mer-om-mig"
      >
        <span>
          {visas ? "Visa mindre" : "Läs mer om mig"}
        </span>

        <span aria-hidden="true">
          {visas ? "−" : "+"}
        </span>
      </button>

      {visas && (
        <div
          id="mer-om-mig"
          className="las-mer-innehall"
        >
          <p>
            Jag gillar att förstå hur saker fungerar,
            från människor till kod. Programmering ger
            mig en ny plats att kombinera min nyfikenhet
            med problemlösning och kreativitet.
          </p>
        </div>
      )}
    </div>
  );
}

export default LasMer;
