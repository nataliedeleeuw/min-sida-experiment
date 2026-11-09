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
import { useState } from "react";

function App() {
  const [ljusPa, setLjusPa] = useState(true);

function vaxlaLjus() {
  setLjusPa((tidigare) => !tidigare);
}
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"element={
        <Hem
          ljusPa={ljusPa}
          vaxlaLjus={vaxlaLjus}
        />
        }
        />
        <Route path="/om-mig" element={<OmMig />} />
        <Route path="/projekt" element={<ProjektSida />} />
        <Route path="/projekt/:id" element={<ProjektDetalj />} />
        <Route path="/fizzbuzz" element={<FizzBuzz />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<EjHittad />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;