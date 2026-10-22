import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import Raknare from "../components/Raknare";

function Hem() {
  return (
    <>
      <Hero
        namn="Natalie de Leeuw"
        titel="Tech Trainee"
      />
      <Projekt />
      <Raknare />
    </>
  );
}

export default Hem;