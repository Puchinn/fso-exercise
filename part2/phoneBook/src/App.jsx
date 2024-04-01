import { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { AddPerson } from "./components/AddPerson";
import { Persons } from "./components/Persons";
import { Notification } from "./components/Notification";
import services from "./services/services";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [notification, setNotification] = useState({});

  useEffect(() => {
    services.getPersons().then((data) => {
      setPersons(data);
    });
  }, []);

  const showNotification = ({ text, error }) => {
    setNotification({ text: text, error: error });
    setTimeout(() => {
      setNotification({});
    }, 3000);
  };

  const onChangeFilterVlue = (event) => {
    setFilterValue(event.target.value);
  };

  const onChangeName = (event) => {
    setNewName(event.target.value);
  };

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const alreadyExists = persons.find((person) => person.name === newName);

    if (!alreadyExists) {
      const person = {
        name: newName,
        number: newNumber,
      };
      try {
        const data = await services.postPerson(person);
        setPersons(persons.concat(data));
        showNotification({ text: `added ${data.name}`, error: false });
      } catch (error) {
        showNotification({ text: error.message, error: true });
      }
    } else {
      const wantReplace = confirm(
        `${newName} is already added to phonebook, replace the older number with a new one?`
      );

      if (wantReplace) {
        try {
          const data = await services.updatePerson({
            ...alreadyExists,
            number: newNumber,
          });
          setPersons(
            persons.map((person) => (person.id === data.id ? data : person))
          );
          showNotification({ text: `updated ${data.name}`, error: false });
          return;
        } catch (error) {
          showNotification({ text: error.message, error: true });
        }
      }
    }
  };

  const deletePerson = async (person) => {
    const wantDelete = window.confirm(`want to delete ${person.name} ?`);
    if (wantDelete) {
      try {
        await services.deletePersonById(person.id);
        setPersons(persons.filter((per) => per.id !== person.id));
        showNotification({ text: "deleted", error: false });
      } catch (err) {
        showNotification({ text: err.message, error: true });
      }
    }
  };

  const filtered = persons.filter((person) =>
    person.name.includes(filterValue)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
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
