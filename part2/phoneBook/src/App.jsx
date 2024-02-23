import { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { AddPerson } from "./components/AddPerson";
import { Persons } from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  }, []);

  const onChangeFilterVlue = (event) => {
    setFilterValue(event.target.value);
  };

  const onChangeName = (event) => {
    setNewName(event.target.value);
  };

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`);
    }

    const person = {
      name: newName,
      number: newNumber,
    };
    axios.post("http://localhost:3001/persons", person).then(({ data }) => {
      setPersons([...persons, data]);
    });
  };

  const filtered = persons.filter((person) =>
    person.name.includes(filterValue)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter inputValue={filterValue} onChangeInput={onChangeFilterVlue} />
      <h2>Add new person</h2>
      <AddPerson
        onSubmit={onSubmit}
        nameValue={newName}
        onChangeName={onChangeName}
        numberValue={newNumber}
        onChangeNumber={onChangeNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filtered} />
    </div>
  );
};

export default App;
