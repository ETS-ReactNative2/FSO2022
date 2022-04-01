# Promises

Promises in JavaScript is just like promises in real life. For example, in real life you might have saying like: "I promise to do go for a walk later" or "I promise to be ready in the next meeting". Then either the promise has to be resolved, completed or that promise is failed and rejected.

## Syntax

`Promise()` will take in **one** parameter, which is a `function`. The function will then gets passed **two** variables of *resolve* and *reject*. After that **create the definition** of that function inside.

`resolve()` and `reject()` both can just pass in anything we want

anything that is inside the `.then()` is going to run for the **resolve**. it will takes a function

`.catch` is to catch the errors which throws by our reject state

in short, `then()` will be called if the promise is resolved; `catch()` will be called if the promise is rejected.

promises are really great if we need to **do something that's going to take a long time in the background**. for example, downloading an image from a different server and you just want to do something after it's complete, instead of **making everything else wait** for it and then we also **can catch it to see if failed** so that way we can maybe retry it or give the user an error message if it did fail.

promises are meant to replace something that uses **callback**

```js
let p = new Promise((resolve, reject) => {
    // define the actual promise here
    let a = 1 + 1
    if (a == 2) {
        // resolve
        resolve('Success')
    } else {
        // reject
        reject('Failed')
    }
})

// interact with promises
// the message is just what we are receiving when the promise is resolved
// it's not restricted to have its name as 'message', it can be named after anything
p.then((message) => {
    console.log(`This is in the then ${message}`)
}).catch((message) => {
    console.log(`This is in the catch ${message}`)
})
```

```js
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log(`Success + ${message}`)
}).catch((error) => {
    // the error here is an object, which is defined in our promise
    console.log(error.name + ' ' + error.message)
})
```

### What if we have a list of promises?

we can run several promises at the same time by just using `Promise.all()`

```js
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

// run all promises together
Promise.all([
    // these are going to run at the same time
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    // messages here is an array
    console.log(messages)
})

// race is just like all but except for it will return as soon as the first one is completed, instead of waiting for everything to complete and because of that it will only return a single item
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    // message here is a single item, since one of the promises is completed, just return
    console.log(message)
})
```
