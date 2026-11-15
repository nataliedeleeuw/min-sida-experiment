
import Hero from "../components/Hero";
import TemaToggle from "../components/TemaToggle";
import Vader from "../components/Vader";
import { NAMN } from "../Data/installningar";
import { fornamn } from "../utils/text";
import CityWeather from "../components/CityWeather";

function Hem({ ljusPa, vaxlaLjus, ljusNiva, setLjusNiva }) {
  return (
    <>
      <Hero
        namn={fornamn(NAMN)}
        titel="Tech Trainee"
        ljusPa={ljusPa}
        vaxlaLjus={vaxlaLjus}
        ljusNiva={ljusNiva}
        setLjusNiva={setLjusNiva}
      />

      <Vader />
      <CityWeather />
      <TemaToggle />
    </>
  );
}

export default Hem;
