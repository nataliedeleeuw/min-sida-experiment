import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3001;

const meddelanden = [];



app.get("/hej", (req, res) => {
  res.json({
    meddelande: "Hej från min egen server!",
    namn: "Natalie",
    roll: "Tech Trainee under utbildning",
    intressen: ["React", "Psykologi", "Skrivande"],
  });
});

app.get("/tid", (req, res) => {
  res.json({
    tid: new Date().toLocaleTimeString("sv-SE"),
  });
});

app.get("/slump", (req, res) => {
  const tal = Math.floor(Math.random() * 100) + 1;

  res.json({
    slumptal: tal,
  });
});

app.get("/rakna/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  res.json({
    summa: a + b,
  });
});


app.post("/kontakt", (req, res) => {
  const { namn, email, text } = req.body;

  meddelanden.push({ namn, email, text });

  console.log(`Nytt meddelande från ${namn}`);

  res.status(201).json({
    meddelande: "Tack för ditt meddelande!",
  });
});

app.get("/kontakt", (req, res) => {
  res.json(meddelanden);
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
