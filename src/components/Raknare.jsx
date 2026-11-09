
import "./Raknare.css";

function Raknare({ ljusNiva, setLjusNiva }) {

  const beskrivningar = [
    "Svagt sken",
    "Lugn kväll",
    "Mysbelysning",
    "Extra ljust"
  ];

  function minskaLjus() {
    setLjusNiva((tidigare) => Math.max(0, tidigare - 1));
  }

  function okaLjus() {
    setLjusNiva((tidigare) => Math.min(3, tidigare + 1));
  }

  function aterstallLjus() {
    setLjusNiva(2);
  }

  return (
    <div
      className="ljus-dimmer"
      role="group"
      aria-label="Justera kattens belysning"
    >

      <button
        type="button"
        className="ljus-dimmer-knapp"
        onClick={minskaLjus}
        disabled={ljusNiva === 0}
        aria-label="Minska ljusstyrkan"
      >
        −
      </button>

      <span
        className="ljus-dimmer-text"
        aria-live="polite"
      >
        {beskrivningar[ljusNiva]}
      </span>

      <button
        type="button"
        className="ljus-dimmer-knapp"
        onClick={okaLjus}
        disabled={ljusNiva === 3}
        aria-label="Öka ljusstyrkan"
      >
        +
      </button>

      <button
        type="button"
        className="ljus-dimmer-reset"
        onClick={aterstallLjus}
        title="Återställ ljusstyrkan"
        aria-label="Återställ ljusstyrkan"
      >
        ↺
      </button>

    </div>
  );
}

export default Raknare;
