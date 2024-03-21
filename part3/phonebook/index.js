import expresss from "express";
import data from "./data.js";

const app = expresss();

app.get("/api/persons", (req, res) => {
  res.json(data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("http://localhost:" + PORT);
});
