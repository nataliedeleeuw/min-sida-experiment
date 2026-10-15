import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projekt from "./components/Projekt";
import OmMig from "./components/OmMig";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        namn="Natalie de Leeuw"
        titel="Tech Trainee"
      />
      <OmMig />
      <Projekt />
      <Footer />
    </>
  );
}

export default App;