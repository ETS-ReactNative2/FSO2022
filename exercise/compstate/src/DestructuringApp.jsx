const Hello = (props) => {
  // const name = props.name
  // const age = props.age
  // destructuring
  const { name, age } = props
  // we even can take destructuring a step further by doing this:
  // here, instead of pass in the props, we destructure it first
  // const Hello = ({ name, age }) => {...}
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()} </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App
