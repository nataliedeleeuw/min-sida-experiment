import GitHubRepon from "../components/GitHubRepon";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import Raknare from "../components/Raknare";
import TemaToggle from "../components/TemaToggle";
import Vader from "../components/Vader";
import { NAMN } from "../Data/installningar";
import { fornamn } from "../utils/text";
import Todo from "../components/Todo";
import CityWeather from "../components/CityWeather";

function Hem() {
  return (
    <>
    <Hero
      namn={fornamn(NAMN)}
      titel="Tech Trainee"
    />
      <Projekt />
      <Todo />
      <GitHubRepon />
      <Vader />
      <CityWeather />
      <Raknare />
      <TemaToggle />
    </>
  );
}

export default Hem;