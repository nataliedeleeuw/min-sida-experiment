
import GitHubRepon from "../components/GitHubRepon";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import TemaToggle from "../components/TemaToggle";
import Vader from "../components/Vader";
import { NAMN } from "../Data/installningar";
import { fornamn } from "../utils/text";
import Todo from "../components/Todo";
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

      <Projekt />
      <Todo />
      <GitHubRepon />
      <Vader />
      <CityWeather />
      <TemaToggle />
    </>
  );
}

export default Hem;
