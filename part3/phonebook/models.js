import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  number: Number,
});

const Person = mongoose.model("Person", personSchema);

export { Person };
