import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        namn="Natalie de Leeuw"
        titel="Frontend Developer"
        stad="Helsingborg"
      />
      <Footer />
    </>
  );
}

export default App;