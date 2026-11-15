
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
  const [ljusPa, setLjusPa] = useState(() => {
    try {
      return localStorage.getItem("portfolio-tema") !== "morkt";
    } catch {
      return true;
    }
  });

  const [ljusNiva, setLjusNiva] = useState(3);

  useEffect(() => {
    const tema = ljusPa ? "ljust" : "morkt";

    document.documentElement.dataset.tema = tema;

    try {
      localStorage.setItem("portfolio-tema", tema);
    } catch {
      // Sidan fungerar även utan lagring.
    }
  }, [ljusPa]);

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
          path="/kontakt"
          element={<Kontakt />}
        />

        {/* FizzBuzz behålls som tidigare. */}
        <Route
          path="/fizzbuzz"
          element={<FizzBuzz />}
        />

        {/* Serverövningar finns bara under utveckling. */}
        {import.meta.env.DEV && (
          <>
            <Route
              path="/server"
              element={<MinServer />}
            />

            <Route
              path="/kontakt-backend"
              element={<KontaktBackend />}
            />

            <Route
              path="/admin-meddelanden"
              element={<AdminMeddelanden />}
            />
          </>
        )}

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
