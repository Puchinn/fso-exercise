import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:"40-230232" }
  ]) 

  console.log(persons)
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState("")

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

  return (
    <div>
      <h2>Phonebook</h2>
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
        persons.map(person => (
          <p key={person.name}> {person.name} : {person.number} </p>
        ))
       }
    </div>
  )
}

export default App