import GitHubRepon from "../components/GitHubRepon";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import Raknare from "../components/Raknare";
import TemaToggle from "../components/TemaToggle";
import GitHubProfil from "../components/GitHubProfil";

function Hem() {
  return (
    <>
      <Hero
        namn="Natalie de Leeuw"
        titel="Tech Trainee"
      />
      <Projekt />
      <GitHubProfil />
      <GitHubRepon />
      <Raknare />
      <TemaToggle />
    </>
  );
}

export default Hem;