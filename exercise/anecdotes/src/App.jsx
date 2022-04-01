import { useState } from 'react'

// title component
const Title = ({title}) => <h1>{title}</h1>

// quote component
const Quote = ({quote}) => <p>{quote}</p>

// display the number of vote
const VoteCount = ({point, index}) => {
  let count = point[index];
  return(
    <p>has {count} votes</p>
  )
}

// button component
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
 
// display mostvoted quote
const MostVotes = ({quotes, points}) => {
  // assume the mostvoted quote is at index 0
  let highest = 0
  // start from 1, compare to the highest index
  for (let i = 1; i < points.length; i++)
  {
    // if the current index's votes is higher than the highest index's vote
    // set the highest index to the current index
    if (points[i] > points[highest])
      highest = i
  }
  // return Quote component once done
  return (
    <Quote quote={quotes[highest]}/>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  // add one vote to the current quote that is displayed to the screen
  const addVotes = (points, index) => () => {
    // it's consider bad to manipulate the state directly
    // hence we make a copy of points using spread operator
    const copy = [...points]
    // index: current quote's index
    // add one vote to the current quote in the copied array
    copy[index] += 1
    // set the points array with the copied array
    // here we are not changing the state, but replace it with another
    setPoints(copy)
  }

  // to generate a random index number based on the number of quotes in the array
  // after that, use setSelected to set the index to the random generated index
  const randomAnecdotes = (max) => () => {
    const index = Math.floor(Math.random() * max);
    setSelected(index)
  }

  // create useState
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(
    // set points to an array that fill with 0
    // the length of the array will the the length of the anecdotes(quotes)
    Array(anecdotes.length).fill(0)
  )
  
  // return the generated DOM
  return (
    <div>
      <Title title="Anecdote of the day"/>
      <Quote quote={anecdotes[selected]}/>
      <VoteCount point={points} index={selected}/>
      <Button handleClick={addVotes(points, selected)} text="vote"/>
      <Button handleClick={randomAnecdotes(anecdotes.length)} text="next anecdotes"/>
      <Title title="Anecdote with most votes"/>
      <MostVotes quotes={anecdotes} points={points} />
    </div>
  )
}

export default App
