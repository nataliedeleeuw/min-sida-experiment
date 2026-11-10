
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hem from "./pages/Hem";
import OmMig from "./pages/OmMig";
import Kontakt from "./components/Kontakt";
import ProjektSida from "./pages/ProjektSida";
import EjHittad from "./pages/EjHittad";
import ProjektDetalj from "./pages/ProjektDetalj";
import FizzBuzz from "./pages/FizzBuzz";
import MinServer from "./components/MinServer";

function App() {
  // Bestämmer om det är dag eller kväll
  const [ljusPa, setLjusPa] = useState(true);

  // Kvällsbelysningen börjar på högsta nivån
  const [ljusNiva, setLjusNiva] = useState(3);

  function vaxlaLjus() {
    // När vi går till kvällsläge börjar vi på nivå 3
    if (ljusPa) {
      setLjusNiva(3);
    }

    // Växla mellan dag och kväll
    setLjusPa((tidigare) => !tidigare);
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Hem
              ljusPa={ljusPa}
              vaxlaLjus={vaxlaLjus}
              ljusNiva={ljusNiva}
              setLjusNiva={setLjusNiva}
            />
          }
        />

        <Route path="/om-mig" element={<OmMig />} />

        <Route path="/projekt" element={<ProjektSida />} />

        <Route
          path="/projekt/:id"
          element={<ProjektDetalj />}
        />

        <Route path="/fizzbuzz" element={<FizzBuzz />} />

        <Route path="/kontakt" element={<Kontakt />} />

        <Route path="*" element={<EjHittad />} />
        <Route path="/server" element={<MinServer />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
