import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projekt from "./components/Projekt";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        namn="Natalie de Leeuw"
        titel="Frontend Developer"
        stad="Helsingborg"
      />
      <Projekt />
      <Footer />
    </>
  );
}

export default App;