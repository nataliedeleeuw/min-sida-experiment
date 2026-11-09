
import "./Raknare.css";

function Raknare({ ljusNiva, setLjusNiva }) {
  const beskrivningar = [
    "Svagt",
    "Lugnt",
    "Mysigt",
    "Ljust"
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
    <div className="ljus-dimmer-wrap">

      <p className="ljus-dimmer-label">
        Kvällsljus · {beskrivningar[ljusNiva]}
      </p>

      <div
        className="ljus-dimmer"
        role="group"
        aria-label="Justera kvällsljuset"
      >

        <button
          type="button"
          className="ljus-dimmer-knapp"
          onClick={okaLjus}
          disabled={ljusNiva === 3}
          aria-label="Öka ljusstyrkan"
          title="Öka ljuset"
        >
          +
        </button>

        <div className="ljus-dimmer-status">

          <span
            className="ljus-dimmer-text"
            aria-live="polite"
          >
            {beskrivningar[ljusNiva]}
          </span>

          <div
            className="ljus-dimmer-dots"
            aria-hidden="true"
          >
            {[0, 1, 2, 3].map((niva) => (
              <span
                key={niva}
                className={
                  ljusNiva >= niva
                    ? "dot aktiv"
                    : "dot"
                }
              />
            ))}
          </div>

        </div>

        <button
          type="button"
          className="ljus-dimmer-knapp"
          onClick={minskaLjus}
          disabled={ljusNiva === 0}
          aria-label="Minska ljusstyrkan"
          title="Minska ljuset"
        >
          −
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

    </div>
  );
}

export default Raknare;
