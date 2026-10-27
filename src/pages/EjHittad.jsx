import { Link, useNavigate } from "react-router-dom";

function EjHittad() {
    const navigate = useNavigate();

    return (
    <section>
      <h1>404 – Sidan finns inte</h1>
      <p>Adressen verkar inte stämma.</p>
      <button onClick={() => navigate(-1)}>
            Gå tillbaka
        </button>
      <Link to="/">Till startsidan</Link>
    </section>
  );
}

export default EjHittad;