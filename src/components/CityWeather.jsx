
import { useState, useEffect } from "react";
import { STADER } from "../Data/stader";
import { grader } from "../utils/text";
import "./CityWeather.css";

function CityWeather() {
  const [selectedCity, setSelectedCity] = useState(STADER[0].namn);
  const [vader, setVader] = useState(null);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamtaVader() {
      setLaddar(true);
      setFel("");

      const city = STADER.find((stad) => stad.namn === selectedCity);

      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,wind_speed_10m`;

        const svar = await fetch(url);

        if (!svar.ok) {
          throw new Error("Kunde inte hämta vädret.");
        }

        const data = await svar.json();
        setVader(data.current);

      } catch {
        setFel("Kunde inte hämta vädret just nu.");
        setVader(null);

      } finally {
        setLaddar(false);
      }
    }

    hamtaVader();
  }, [selectedCity]);

  return (
    <section className="city-weather">
      <h2>Välj stad</h2>

      <label htmlFor="valj-stad">
        Vilken stad vill du se vädret för?
      </label>

      <select
        id="valj-stad"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {STADER.map((stad) => (
          <option key={stad.namn} value={stad.namn}>
            {stad.namn}
          </option>
        ))}
      </select>

      {laddar && <p>Hämtar väder...</p>}

      {fel && <p role="alert">{fel}</p>}

      {!laddar && !fel && vader && (
        <div className="city-weather-resultat">
          <h3>{selectedCity}</h3>
          <p>Temperatur: {grader(vader.temperature_2m)}</p>
          <p>Vindhastighet: {vader.wind_speed_10m} km/h</p>
        </div>
      )}
    </section>
  );
}

export default CityWeather;
