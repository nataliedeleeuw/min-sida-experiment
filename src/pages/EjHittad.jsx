import { Link } from "react-router-dom";

function EjHittad() {
  return (
    <section>
      <h1>404 – Sidan finns inte</h1>
      <p>Adressen verkar inte stämma.</p>
      <Link to="/">Till startsidan</Link>
    </section>
  );
}

export default EjHittad;