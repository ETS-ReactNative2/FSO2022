import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

// the props that the App received is the notes data
const App = () => {
  const [notes, setNotes] = useState([]);
  // stores the user-submitted input
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  // useEffect. by default will run after the componenet has been rendered
  const hook = () => {
    console.log("effect");
    axios
      // .get returns a promise
      .get("http://localhost:3001/notes")
      // .then receive the promise and runs if its' fulfilled
      .then((response) => {
        console.log("promies fulfilled");
        setNotes(response.data);
      });
  };
  // if the second parameter is an empty array [], then the effect is only run along with the first render of the component.
  useEffect(hook, []);

  /*
  the useEffect above also can be written in this way
  useEffect(() => {
    console.log('effect')

    const eventHandler = response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    }

    const promise = axios.get('https://localhost:3001/notes)
    promise.then(eventHandler)
  }, [])
  */

  console.log("render", notes.length, "notes");
 
  // the function to handle the onSubmit event of the form
  // event represents an event which takes place in the DOM
  // event will be triggered by the user action such as submit form, click button, and etc
  const addNote = (event) => {
    // to prevent the default behavior of form, which will refresh the page
    event.preventDefault();
    // event.target: the target that triggered the event.
    // in this case, event.target will be the form, since we "listen" this event from a onSubmit event of the form
    // console.log('button clicked', event.target)
    const noteObject = {
      // newNote is that state we receive from the input
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    // concat does not mutate the array (state) directly !important
    // never ever mutate the state directly in React
    setNotes(notes.concat(noteObject));
    // reset the newNote
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    // the event.target here will be the input field since we associate this event handler to the input field
    // event.target.value refers to the input value of that element
    // NOTICE that we DID NOT call the event.preventDefault() here. this is because there is no default action
    // that occurs on an input change, unlike on a form submission
    // console.log(event.target, event.target.value)
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {
          // iterate through the notes data using map and foreach note, create a component
          notesToShow.map((note) => (
            <Note key={note.id} note={note} />
          ))
        }
      </ul>
      {/*
      There are two ways to handle the submit event for the form:
      1. associate a function to the onClick event of the submit button
      2. associate a function to the onSubmit event of the form
      Here, we are using the second one, so we the form is submitted, addNote will be called
      */}
      <form onSubmit={addNote}>
        {/*
        - value is to set the initial value of the input, but if only set this, the text can't be edited
        - rmb that we are actually setting a component state as the initial value of the input
        - in order to enable editing, we need to register an event handler that
        react to the changes that made to the input with the component state
        - in this case, we create the handleNoteChange and associate it with the onChange event of the input field
        - the onchange will be called every time a change occurs in the input element
        - the event handler function receives the event object as its event parameter
        */}
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
