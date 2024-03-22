import expresss from "express";
import data from "./data.js";

const app = expresss();

app.get("/api/persons", (req, res) => {
  res.json(data);
});

app.get("/info", (req, res) => {
  res.send(
    `<h1>Phonebook has info for ${data.length} people</h1>
    <h2>${new Date()}</h2>`
  );
  res.end();
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = data.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("http://localhost:" + PORT);
});
