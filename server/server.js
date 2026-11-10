
import express from "express";

const app = express();
const PORT = 3001;

app.get("/hej", (req, res) => {
  res.send("Hej från min server!");
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
