import { useState } from "react";

function LasMer() {
  const [visas, setVisas] = useState(false);

  return (
    <div>
      <button onClick={() => setVisas(!visas)}>
        {visas ? "Visa mindre" : "Läs mer om mig"}
      </button>

      {visas && (
        <p>
          Jag gillar att förstå hur saker fungerar, från människor
          till kod. Programmering ger mig en ny plats att kombinera
          min nyfikenhet med problemlösning och kreativitet.
        </p>
      )}
    </div>
  );
}

export default LasMer;