import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: String,
  number: Number,
});

const Person = mongoose.model("Person", personSchema);

mongoose.connect("mongodb://127.0.0.1:27017/phonebook").catch((err) => {
  console.log("error connecting to MongoDB:", err.message);
});
console.log("connected to MongoDB");

const password = process.argv[2];

if (!password) {
  console.log("Please provide a password as an argument");
  process.exit(1);
}

const [, , , name, number] = process.argv;

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`);
    });
    mongoose.connection.close();
  });
}

if (process.argv.length === 5) {
  const person = new Person({
    name,
    number,
  });

  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
}
