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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("http://localhost:" + PORT);
});
