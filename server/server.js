import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
const PORT = 3001;



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

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
