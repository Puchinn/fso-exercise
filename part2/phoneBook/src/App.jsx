import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  console.log(persons)
  const [newName, setNewName] = useState('')

  const onChange = (event)=> {
    setNewName(event.target.value)
  }
  const onSubmit = (event)=>{
    event.preventDefault()
    if(persons.some(person => person.name === newName)){
      return alert(`${newName} is already added to phonebook`)
    }
    setPersons([...persons,{name:newName}])
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
        <div>
          name: <input  value={newName} onChange={onChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App