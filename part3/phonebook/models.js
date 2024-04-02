import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
  },
  number: {
    type: String,
    validate: [
      {
        validator: (value) => {
          return value.toString().length >= 8;
        },
        message: "must be equal or greather than 8",
      },
      {
        validator: (value) => {
          const regex = /^(\d{2,3}-\d+)$/;
          return regex.test(value);
        },
        message: "must be a valid phone number",
      },
    ],
  },
});

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
  },
});
const Person = mongoose.model("Person", personSchema);

export { Person };
