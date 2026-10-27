import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hem from "./pages/Hem";
import OmMig from "./pages/OmMig";
import Kontakt from "./components/Kontakt";
import ProjektSida from "./pages/ProjektSida";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/om-mig" element={<OmMig />} />
        <Route path="/Projekt" element={<ProjektSida />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;