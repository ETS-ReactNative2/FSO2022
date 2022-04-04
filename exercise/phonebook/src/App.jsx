import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState([])
  const [showFiltered, setShowFiltered] = useState(false)

  // useEffect hook
  const effectHook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  // only run in the first rendered
  useEffect(effectHook, [])

  // event handler for form submit
  const addPerson = (event) => {
    event.preventDefault()
    // tried using spread operator to include all the data in the previous state
    // then setPersons(personObject). this could not work

    // check if the name already existed
    // use map to extract the name of each person, store it in nameList
    const nameList = persons.map(person => person.name)
    // check if the newName already existed
    const isExisted = nameList.includes(newName)

    if (isExisted) {
      alert(`${newName} already existed!`)
      setNewName('')
      setNewNumber('')
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  // event handler for name
  const addNewName = (event) => {
    setNewName(event.target.value)
  }

  //event handler for number
  const addNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  // event handler for filter
  const filterThis = (event) => {
    // filter the list
    const searchTerm = event.target.value.toLowerCase()
    if (searchTerm.length > 0) {
      const filtered = persons.filter(person => person.name.toLowerCase().startsWith(searchTerm))
      setFilter(filtered)
      setShowFiltered(true)
    }
    else {
      setFilter(persons)
      setShowFiltered(false)
    }
  }

  // whether to show the filtered list or not
  const filteredList = showFiltered
    ? filter
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={filterThis} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        addNewName={addNewName}
        newNumber={newNumber}
        addNewNumber={addNewNumber}
      />
      <h3>Numbers</h3>
      <Persons list={filteredList} />
    </div>
  )
}

export default App