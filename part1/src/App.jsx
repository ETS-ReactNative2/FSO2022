const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 18}/>
      <Hello name="Daisy" age={age}/>
      <Hello name="Aileen" age={age * 2}/>
    </>
  )
}

export default App
