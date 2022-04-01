import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

// axios.get will return a promise
// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise)

// promise.then(response => {
//   console.log(response.data)
// })

// a more readable way to format chained method calls
// if the get could fulfilled, run then
// then will receive an object thrown by the get
// to get the data we use theObjectName.data
// this method could be acceptable in some circumstances, but it's somewhat problematic
axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.render(
    <App notes={notes} />,
    document.getElementById('root')
  )
})
