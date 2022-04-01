import { useState } from "react"

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const LeftRight = () => {
    // creted 2 pieces of state: left & right. It can be done in a more compact way
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)

    // another way to create state using object
    // const [clicks, setClick] = useState({
    //     left: 0, right: 0
    // })

    // create state with array
    const [allClicks, setAll] = useState([])

    // this function can even simplified into more compact format
    // const handleLeftClick = () => {
    //     const newClicks = {
    //         // object spread operator, it creates a new object that has copies of all the properties of clicks object
    //         ...clicks,
    //         left: clicks.left + 1
    //     }
    //     setClick(newClicks)
    // }

    // const handleRightClick = () => {
    //     const newClicks = {
    //         ...clicks,
    //         right: clicks.right + 1
    //     }
    //     setClick(newClicks)
    // }

    // compact way to declare event handler
    // const handleLeftClick = () => 
    //     setClicks({...clicks, left: clicks.left + 1})
    
    // const handleRightClick = () => 
    //     setClicks({...clicks, right: clicks.right + 1})
    
    // why not do this: clicks.left++?
    // ans: the application will work but it is FORBIDDEN in React to mutate state directly
    // as it will result in unexpected side effects. Changing state has to always be done by
    // setting the state to a new object. If properties from the previous state object are not changed
    // they need to simply be copied, which can be done by copying those properties into a new
    // object, and setting that as the new state

    // more compact way (damnn)
    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }
    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            {left}
            <Button handleClick={handleLeftClick} text ='left' />
            <Button handleClick={handleRightClick} text ='right' />
            {right}
            <History allClicks={allClicks} />
        </div>
    )
}

export default LeftRight