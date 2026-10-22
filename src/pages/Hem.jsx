import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import Raknare from "../components/Raknare";
import TemaToggle from "../components/TemaToggle";

function Hem() {
  return (
    <>
      <Hero
        namn="Natalie de Leeuw"
        titel="Tech Trainee"
      />
      <Projekt />
      <Raknare />
      <TemaToggle />
    </>
  );
}

export default Hem;