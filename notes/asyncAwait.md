# Async & Await

Async and Await makes Promises easier to work with

example:

```js
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// normal way to interact with promises
// so when the makeRequest is fulfilled, it will run then.
// then will receive a response(string)
makeRequest('Google').then(response => {
    console.log('Response Received')
    // we pass in the response to processRequest
    // since processRequest will only run resolve,
    // so it will return a string: Extra Infor...
    return processRequest(response)
    // after this then completed, proceed to the next then
    // the value that is being returned in this then will pass to next then
    // so actually can say that if the promise didn't fulfilled, these two then will not run
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => {
    console.log(err)
})
```

so as we can it's not too bad to understand to whole promises and what happen if it's resolved or rejected

but we can make it a lot more easier without those `.then` and the nesting inside of all of them

so how? just use async and await instead!

first thing that we need to know about async and await, is that we need to have somekind of function that your awaiting code is inside of

```js
// create an async function
async function doWork() {
    // the await keyword is basically telling the code that should wait the makeRequest is finished and then afterward execute the next thing
    // since it will return something, so we can assign it to a variable
    const response = await makeRequest('Google')
    // so when the string below gets outputed to the console, it means the makeRequest is completed
    console.log('Response Received')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
}

// to call the function, that's it!
doWork()
/*
result:
Making Request to Google
Response Received
Processing response
Extra Information + Google says hi
*/
```

as you can see, async and await works exactly the same as promises but neater and easier to understand

but how should we handle errors? we need to use a try-catch block

```js
async function doWork() {
    // in try block, you put those code that could potentially fail
    // catch block is for catching those errors
    // what happen is that the code inside the try block will be executed first, then once it encounters an error, it immediately leave and run the catch block
    try {
        const response = await makeRequest('Google')
        console.log('Response Received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err) {
        // since our err thrown by promises are string
        console.log(err)
    }
}
```

so one thing that u have to make sure is that, you need to wrap your code in an async function, whether it's arrow function, anonymous functions or normal function like the one above it doesn't matter. also, don't forget about the `async` and the `await` keyword
