import { useState } from "react";

function TemaToggle() {
  const [morkt, setMorkt] = useState(false);

  return (
    <section
      style={{
        backgroundColor: morkt ? "#261f3a" : "#fcf6fa",
        color: morkt ? "#fcf6fa" : "#261f3a",
        padding: "32px",
        borderRadius: "12px",
      }}
    >
      <h2>Ljust eller mörkt?</h2>

      <p>
        Samma komponent, olika stämning. Nu med egen strömbrytare.
      </p>

      <button onClick={() => setMorkt(!morkt)}>
        {morkt ? "Byt till ljust läge" : "Byt till mörkt läge"}
      </button>
    </section>
  );
}

export default TemaToggle;