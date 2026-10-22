import { useState } from "react";

function Raknare() {
  const [antal, setAntal] = useState(0);

  return (
    <section>
      <h2>Min räknare</h2>
      <button
     onClick={() => {
      if (antal > 0) {
         setAntal(antal - 1);
       }
     }}
>
     −
    </button>

      <span>{antal}</span>

      <button onClick={() => setAntal(antal + 1)}>
        +
      </button>
    </section>
  );
}

export default Raknare;