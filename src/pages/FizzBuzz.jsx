
import "./FizzBuzz.css";

function FizzBuzz() {
  const resultat = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultat.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultat.push("Fizz");
    } else if (i % 5 === 0) {
      resultat.push("Buzz");
    } else {
      resultat.push(i);
    }
  }

  return (
    <section className="fizzbuzz">
      <h2>FizzBuzz</h2>

      <p>
        Talen 1 till 100, med Fizz för multiplar
        av 3, Buzz för multiplar av 5 och
        FizzBuzz för multiplar av båda.
      </p>

      <div className="fizzbuzz-lista">
        {resultat.map((värde, index) => (
          <div
            key={index}
            className={
              värde === "FizzBuzz"
                ? "fizzbuzz-ruta kombination"
                : "fizzbuzz-ruta"
            }
          >
            <span>{index + 1}</span>
            <strong>{värde}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FizzBuzz;
