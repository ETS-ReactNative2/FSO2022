const Total = ({ parts }) => {
  const total = 
    parts.reduce((currentTotal, part) => {
      return part.exercises + currentTotal
    }, 0)
  return <p><b>total of {total} exercises</b></p>
}

export default Total