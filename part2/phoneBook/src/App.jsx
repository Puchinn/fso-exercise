import { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { AddPerson } from "./components/AddPerson";
import { Persons } from "./components/Persons";
import services from "./services/services";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    services.getPersons().then((data) => {
      setPersons(data);
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
    const alreadyExists = persons.find((person) => person.name === newName);

    if (!alreadyExists) {
      const person = {
        name: newName,
        number: newNumber,
      };
      return services.postPerson(person).then((data) => {
        setPersons(persons.concat(data));
      });
    }
    const wantReplace = confirm(
      `${newName} is already added to phonebook, replace the older number with a new one?`
    );

    if (wantReplace) {
      return services
        .updatePerson({ ...alreadyExists, number: newNumber })
        .then((data) => {
          setPersons(
            persons.map((person) => (person.id === data.id ? data : person))
          );
        });
    }
  };

  const deletePerson = (person) => {
    const wantDelete = window.confirm(`want to delete ${person.name} ?`);
    if (wantDelete) {
      services.deletePersonById(person.id).then(() => {
        setPersons(persons.filter((per) => per.id !== person.id));
      });
    }
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
      <Persons persons={filtered} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
