
import projektLista from "../Data/Projekt.json";
import "./Statistik.css";

function Statistik() {
  const antal = projektLista.reduce((summa, projekt) => {
    for (const teknik of projekt.teknik) {
      summa[teknik] = (summa[teknik] || 0) + 1;
    }

    return summa;
  }, {});

  const sorteradStatistik = Object.entries(antal).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <section className="statistik">
      <h3>Det här har jag använt mest</h3>

      <div className="statistik-lista">
        {sorteradStatistik.map(([teknik, antalProjekt]) => {
          const procent =
            projektLista.length === 0
              ? 0
              : Math.round(
                  (antalProjekt / projektLista.length) * 100
                );

          return (
            <div className="statistik-rad" key={teknik}>
              <div className="statistik-info">
                <span>{teknik}</span>

                <span>
                  {antalProjekt} projekt ({procent}%)
                </span>
              </div>

              <div className="statistik-stapel">
                <div
                  className="statistik-fyllning"
                  style={{ width: `${procent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Statistik;
