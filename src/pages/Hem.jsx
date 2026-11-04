import GitHubRepon from "../components/GitHubRepon";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import Raknare from "../components/Raknare";
import TemaToggle from "../components/TemaToggle";
import Vader from "../components/Vader";
import { NAMN } from "../Data/installningar";
import { fornamn } from "../utils/text";

function Hem() {
  return (
    <>
    <Hero
      namn={fornamn(NAMN)}
      titel="Tech Trainee"
    />
      <Projekt />
      <GitHubRepon />
      <Vader />
      <Raknare />
      <TemaToggle />
    </>
  );
}

export default Hem;