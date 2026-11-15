
import { useEffect, useState } from "react";
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
import KontaktBackend from "./components/KontaktBackend";
import AdminMeddelanden from "./components/AdminMeddelanden";

import "./Tema.css";

function App() {
  // Hela webbplatsen delar på samma ljusläge.
  // Besökarens tidigare val används vid nästa besök.
  const [ljusPa, setLjusPa] = useState(() => {
    try {
      return localStorage.getItem("portfolio-tema") !== "morkt";
    } catch {
      return true;
    }
  });

  // Kattens ljusdimmer.
  const [ljusNiva, setLjusNiva] = useState(3);

  // Spara temat och ändra även bakgrunden utanför sidan.
  useEffect(() => {
    const tema = ljusPa ? "ljust" : "morkt";

    document.documentElement.dataset.tema = tema;

    try {
      localStorage.setItem("portfolio-tema", tema);
    } catch {
      // Webbplatsen fungerar även utan lagring.
    }
  }, [ljusPa]);

  // Används av både kattens lampa och menyknappen.
  function vaxlaLjus() {
    if (ljusPa) {
      setLjusNiva(3);
    }

    setLjusPa((tidigare) => !tidigare);
  }

  return (
    <div
      className={
        ljusPa
          ? "site-shell"
          : "site-shell dark-mode"
      }
    >
      <Navbar
        ljusPa={ljusPa}
        vaxlaLjus={vaxlaLjus}
      />

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

        <Route
          path="/om-mig"
          element={<OmMig />}
        />

        <Route
          path="/projekt"
          element={<ProjektSida />}
        />

        <Route
          path="/projekt/:id"
          element={<ProjektDetalj />}
        />

        <Route
          path="/fizzbuzz"
          element={<FizzBuzz />}
        />

        <Route
          path="/kontakt"
          element={<Kontakt />}
        />

        <Route
          path="/kontakt-backend"
          element={<KontaktBackend />}
        />

        <Route
          path="/admin-meddelanden"
          element={<AdminMeddelanden />}
        />

        <Route
          path="/server"
          element={<MinServer />}
        />

        <Route
          path="*"
          element={<EjHittad />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
