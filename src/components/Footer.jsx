import './Footer.css';

function Footer() {
  const år = new Date().getFullYear();

  return (
    <footer className="footer" id="kontakt">
      <p>
  © {år}{" "}
  <a
    href="https://se.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Natalie de Leeuw
  </a>
</p>
      <p>Gjord med React 🧁</p>
    </footer>
  );
}

export default Footer;