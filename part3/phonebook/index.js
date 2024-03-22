import expresss from "express";
import data from "./data.js";

let phonebook = [...data];

const app = expresss();

app.use(expresss.json());

app.get("/api/persons", (req, res) => {
  res.json(phonebook);
});

app.get("/info", (req, res) => {
  res.send(
    `<h1>Phonebook has info for ${phonebook.length} people</h1>
    <h2>${new Date()}</h2>`
  );
  res.end();
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = phonebook.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.post("/api/persons", (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({
      error: "name or number missing",
    });
  }
  const person = {
    id: Math.floor(Math.random() * 1000),
    name,
    number,
  };
  phonebook = phonebook.concat(person);
  res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  phonebook = phonebook.filter((person) => person.id !== id);
  res.status(204).end();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("http://localhost:" + PORT);
});
