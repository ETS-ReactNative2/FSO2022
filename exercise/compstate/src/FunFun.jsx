import { useState } from "react";

const Display = props => <div>{props.value}</div>

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

// this is a component
const FunFun = () => {
    const [value, setValue] = useState(0)

    // this is a function (slightly verbose)
    // const hello = (who) => {
    //     const handler = () => {
    //         console.log('hello', who)
    //     }
    //     return handler
    // }

    // eliminate helper variables and just return the function directly (refer to the function above)
    // const hello = (who) => {
    //     // returning an arrow function
    //     return () => {
    //         console.log('hello', who)
    //     }
    // }

    // Again, since it only return a single command, we can omit the curly brances and the return keyword
    // const hello = (who) => () => {
    //     console.log('hello', who)
    // }

    // compact version of function call function
    const setToValue = (newValue) => () => {
        console.log('value now', newValue)
        setValue(newValue)
    }

    return (
        <div>
            <Display value={value}/>
            <Button handleClick={setToValue(1000)} text="thousand" />
            <Button handleClick={setToValue(0)} text="reset"/>
            <Button handleClick={setToValue(value + 1)} text="increment"/>
        </div>
    )
}

export default FunFun