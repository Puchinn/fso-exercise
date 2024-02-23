import { useState } from 'react'
import {Filter} from "./components/Filter"
import { AddPerson } from './components/AddPerson'
import { Persons } from './components/Persons'

const contacts = [
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]

const App = () => {
  const [persons, setPersons] = useState(contacts) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState("")
  const [filterValue,setFilterValue] = useState("")

  const onChangeFilterVlue = (event)=>{
    setFilterValue(event.target.value)
  }

  const onChangeName = (event)=> {
    setNewName(event.target.value)
  }

  const onChangeNumber = (event)=>{
    setNewNumber(event.target.value)
  }

  const onSubmit = (event)=>{
    event.preventDefault()
    if(persons.some(person => person.name === newName)){
      return alert(`${newName} is already added to phonebook`)
    }
    setPersons([...persons,{name:newName,number : newNumber}])
  }

  const filtered = persons.filter(person => person.name.includes(filterValue))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter inputValue={filterValue} onChangeInput={onChangeFilterVlue} />
      <h2>Add new person</h2>
      <AddPerson onSubmit={onSubmit} nameValue={newName} onChangeName={onChangeName} numberValue={newNumber} onChangeNumber={onChangeNumber} />
      <h2>Numbers</h2>
       <Persons persons={filtered} />
    </div>
  )
}

export default App