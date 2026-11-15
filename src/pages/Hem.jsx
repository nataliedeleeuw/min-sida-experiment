
import Hero from "../components/Hero";
import { NAMN } from "../Data/installningar";
import { fornamn } from "../utils/text";

function Hem({
  ljusPa,
  vaxlaLjus,
  ljusNiva,
  setLjusNiva
}) {
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
    </>
  );
}

export default Hem;
