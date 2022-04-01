# useEffect

> Do something as a **side effect** when something happens.

## Example

Below is a sample react application

`useEffect` will run every single time when the application re-render. this could be useful in certain situation but sometimes we just want it to happens at a certain point, or under certain situation.

`useEffect` actually takes in **two** parameters. the 2nd parameter is going to **an array**. whatever you pass into the array is going to be values that: whenever they changes,  you hook will going to run.

use the code below as an example, so when `resourceType` changed, the `useEffect` will run

so if you run the code below, and click all the button once, you can see that `"render"` has been outputed to the console. but, if you click one of the button repeatively, you can see that the `"render"` will only appears **once**! (assume you clicked `Users` or `Comments` button before this). but...why is it so?

let's look into deeper and see what's is going on. so, again assume we are clicking the `Posts` button repeatively. the message `"render"` only outputted to the console **once**. first thing, you need to know that the application is actually **re-rendered everytime** after you click on the button. so theoritically the message should be outputted every time we click on the button. before you confused even more, let's look at what's 2nd parameter or `useEffect` again.

the 2nd parameter is an array. the values that you pass into the array is going to be the value that WHENEVER THEY **CHANGES**, THE **HOOK WILL GOING TO RUN AGAIN**.

so when you repeatively click on one button (in this example), the value **doesn't change** right? then the hook should run or not. yup, so the answer is obvious now, it won't run. that's why we only can see one `"render"` msg been outputted to the console.

one commonly used of `useEffect` is pass-in an **empty array** as the second parameter. what's does that mean? since the empty array will not change at all, it will always be empty no matter what. so it means that the hook will only run on the first rendered/initial render.

```js
import { useState, useEffect } from 'react'

const App = () => {
    const [resourceType, setResourceType] = useState('posts')

    // this hook will runs every single time when our application renders
    useEffect(() => {
        console.log('render')
    }, [resourceType])

    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
        </>
    )
}
```
