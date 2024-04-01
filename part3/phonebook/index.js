import expresss from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import { Person } from "./models.js";
import config from "./config.js";
import { errorHanddling } from "./middlewares.js";

const app = expresss();

morgan.token("body", (req) => JSON.stringify(req.body));

app.use(expresss.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
app.use(cors());
app.use(expresss.static("dist"));
app.use(errorHanddling);

mongoose
  .connect(config.mongodb)
  .then(() => {
    app.get("/api/persons", async (req, res) => {
      const persons = await Person.find({});
      res.json(persons);
    });

    app.get("/info", async (req, res) => {
      const persons = await Person.find({});
      res.send(
        `<h1>Phonebook has info for ${persons.length} people</h1>
      <h2>${new Date()}</h2>`
      );
      res.end();
    });

    app.get("/api/persons/:id", async (req, res) => {
      const id = Number(req.params.id);
      const person = await Person.findById(id);
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    });

    app.post("/api/persons", async (req, res) => {
      const { name, number } = req.body;

      if (!name || !number) {
        return res.status(400).json({
          error: "name or number missing",
        });
      }

      try {
        const person = new Person({ name, number });
        await person.save();
        res.json(person);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    app.put("/api/persons/:id", async (req, res) => {
      const id = req.params.id;
      const { name, number } = req.body;

      try {
        const person = await Person.findByIdAndUpdate(
          id,
          { name, number },
          { new: true, runValidators: true, context: "query" }
        );
        res.json(person);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    app.delete("/api/persons/:id", async (req, res) => {
      const id = req.params.id;
      try {
        await Person.findByIdAndDelete(id);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    const PORT = config.port || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log("http://localhost:" + PORT);
    });
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });
