import { useState } from 'react'

const Header = props => <h1>{props.text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const NoStats = (props) => {
  if (props.votes[0] == 0 & props.votes[1] == 0 & props.votes[2] == 0)
    return (<p>No feedback given</p>)
  return (null)
}

const Statistics = props => {
  if (props.amount)
    return (
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.amount}</td>
        </tr>
      </tbody>
    )
  return (null)
}

const Average = props => {
  const average = ((props.good * 1) + (props.bad * -1)) / props.all

  return (<Statistics text="average" amount={average} />)
}
const Positive = props => {
  const positive = (props.good / props.all) * 100

  return (<Statistics text="positive" amount={positive} />)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const votes = [good, neutral, bad]

  const voteGood = () => setGood(good + 1)
  const voteNeutral = () => setNeutral(neutral + 1)
  const voteBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={voteGood} text="good"/>
      <Button handleClick={voteNeutral} text="neutral"/>
      <Button handleClick={voteBad} text="bad"/>
      <Header text="statistics"/>
      <NoStats votes={votes}/>
      <table>
        <Statistics text="good" amount={good}/>
        <Statistics text="neutral" amount={neutral}/>
        <Statistics text="bad" amount={bad}/>
        <Statistics text="all" amount={all}/>
        <Average good={good} bad={bad} all={all}/>
        <Positive good={good} all={all}/>
      </table>
    </div>
  )
}

export default App
