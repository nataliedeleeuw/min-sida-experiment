
import cors from "cors";
import express from "express";

const app = express();
const PORT = 3001;

// Tillåt React att kommunicera med servern
app.use(cors());

// Gör det möjligt att läsa JSON som skickas till servern
app.use(express.json());

// Här sparas inkommande kontaktmeddelanden
const meddelanden = [];

// Hälsning med information om mig
app.get("/hej", (req, res) => {
  res.json({
    meddelande: "Hej från min egen server!",
    namn: "Natalie",
    roll: "Tech Trainee under utbildning",
    intressen: ["React", "Psykologi", "Skrivande"],
  });
});

// Skicka tillbaka aktuell tid
app.get("/tid", (req, res) => {
  res.json({
    tid: new Date().toLocaleTimeString("sv-SE"),
  });
});

// Slumpa ett tal mellan 1 och 100
app.get("/slump", (req, res) => {
  const tal = Math.floor(Math.random() * 100) + 1;

  res.json({
    slumptal: tal,
  });
});

// Addera två tal från adressen
app.get("/rakna/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  res.json({
    summa: a + b,
  });
});

// Ta emot kontaktmeddelanden
app.post("/kontakt", (req, res) => {
  const { namn, email, text } = req.body;

  // Kontrollera att namn och meddelande är ifyllda
  if (
    typeof namn !== "string" ||
    namn.trim() === "" ||
    typeof text !== "string" ||
    text.trim() === ""
  ) {
    return res.status(400).json({
      fel: "Namn och meddelande måste fyllas i",
    });
  }

  // Spara meddelandet
  meddelanden.push({ namn, email, text });

  console.log(`Nytt meddelande från ${namn}`);

  // Bekräfta att meddelandet har tagits emot
  res.status(201).json({
    meddelande: "Tack för ditt meddelande!",
  });
});

// Visa alla sparade kontaktmeddelanden
app.get("/kontakt", (req, res) => {
  res.set("Cache-Control", "no-store");
  res.json(meddelanden);
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
