
import projektLista from "../Data/Projekt.json";
import "./Statistik.css";

function Statistik() {
  // Räkna bara projekt som inte är under planering.
  const aktivaProjekt = projektLista.filter(
    (projekt) =>
      !projekt.teknik.includes("Under planering")
  );

  const antal = aktivaProjekt.reduce(
    (summa, projekt) => {
      for (const teknik of projekt.teknik) {
        summa[teknik] = (summa[teknik] || 0) + 1;
      }

      return summa;
    },
    {}
  );

  const sorteradStatistik = Object.entries(antal).sort(
    (a, b) =>
      b[1] - a[1] ||
      a[0].localeCompare(b[0], "sv")
  );

  return (
    <section className="statistik">
      <h3>Tekniker i mina projekt</h3>

      <div className="statistik-lista">
        {sorteradStatistik.map(
          ([teknik, antalProjekt]) => {
            const procent =
              aktivaProjekt.length === 0
                ? 0
                : Math.round(
                    (antalProjekt /
                      aktivaProjekt.length) *
                      100
                  );

            return (
              <div
                className="statistik-rad"
                key={teknik}
              >
                <div className="statistik-info">
                  <span>{teknik}</span>

                  <span>
                    {antalProjekt} av{" "}
                    {aktivaProjekt.length} projekt
                  </span>
                </div>

                <div
                  className="statistik-stapel"
                  role="meter"
                  aria-label={teknik}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={procent}
                  aria-valuetext={`${antalProjekt} av ${aktivaProjekt.length} projekt`}
                >
                  <div
                    className="statistik-fyllning"
                    style={{ width: `${procent}%` }}
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Statistik;
