import { useState } from 'react'

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
      <div>
        filter :
        <input type="text" value={filterValue} onChange={onChangeFilterVlue} />
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <div>
          name: <input  value={newName} onChange={onChangeName}/>
          </div>
          <div>
          number: <input type="text" onChange={onChangeNumber} value={newNumber} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
       {
        filtered.map(person => (
          <p key={person.name}> {person.name} : {person.number} </p>
        ))
       }
    </div>
  )
}

export default App