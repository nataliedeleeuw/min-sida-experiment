
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
            Det jag tycker är särskilt roligt med
            programmering är kombinationen av
            problemlösning och kreativitet.
            Jag vill inte bara förstå hur en funktion
            fungerar, utan också fundera på hur
            någon annan kommer att använda den.
          </p>

          <p>
            Därför tycker jag om att arbeta med
            både design, struktur och små detaljer
            som gör en webbplats tydlig och trevlig
            att använda.
          </p>
        </div>
      )}
    </div>
  );
}

export default LasMer;
