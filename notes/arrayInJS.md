# Array in JS

## General HOW-TO

```js
// create an array
const a = ["A", "B", "C", "D"]

// get an element from the array
// array starts from 0
console.log(a[0]) // get the first element: "A"
console.log(a[3]) // get the fourth element: "D"

// get the length of the array (the size of the array)
a.length

// add elements to the array
a.push("E") // a = ["A", "B", "C", "D", "E"]
// we can add any type of data in the array, even an array of object
a.push(1) // push an integer to the array
a.push(["F", "G"]) // push an array to the array. this is how it's look like now:
/*
a = [
    "A",
    "B",
    "C",
    "D",
    "E",
    1,
    ["F", "G"] // this is called as a nested array (2D array concept)
]
*/
// to get the nested array
console.log(a[5][0]) // "F"
console.log(a[5][1]) // "G"

// to update an element in the array
// just overwrite it, just as simple as it is
```

## Array Methods

In the following examples, we will use this array:

```js
const items = [
    { name: 'Bike',     price: 100  },
    { name: 'TV',       price: 200  },
    { name: 'Album',    price: 10   },
    { name: 'Book',     price: 5    },
    { name: 'Phone',    price: 500  },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25   },
]
```

### filter

filter method is to filter out everything that's not under a certain condition. let's say we want to filter out the items that are not under a 100 dollar

this method takes in a callback function and will return a **new array**,
which means the original array does not get modified.

the `item.price <= 100` is a condition that will either let the function to determine it's `true` or `false`. so, if it's `true` then the item will be pushed into the `filteredItems`.

```js
const filteredItems = items.filter((item) => {
    return item.price <= 100
})

console.log(filteredItems)
/*
result:
[
  { name: 'Bike', price: 100 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Keyboard', price: 25 }
]
*/
```

### map

map allow us to take in one array and convert it into a new array

the example below uses `map` on the `items` array. it takes a callback function and the function will use a parameter `item` which is the each of the single item in the `items` array. after that, it pushed the `item.name` to the new array called: `itemNames`

it also can be describe in this way: iterate through the array using the `map` method, as long as it's item's name, push the name to the `itemNames` array.

```js
const itemNames = items.map((item) => {
    return item.name
})

console.log(itemNames)

/*
result:
[
  'Bike',
  'TV',
  'Album',
  'Book',
  'Phone',
  'Computer',
  'Keyboard'
]
*/
```

### find

allow us to find a single object in an array

the example below can be explained in this way: it uses the `find` method to iterate through the array. push the item into the new array `foundItem` if the current item's name is `'Book'`

```js
const foundItem = items.find((item) => {
    return item.name === 'Book'
})

console.log(foundItem)

/*
result: 
{ name: 'Book', price: 5 }
*/
```

### forEach

this method does not return anything. it works very similarly to a `for loop` but it's going to take a callback function

the example below can be explained like this: for each item (iterate) in the `items`, log each of them out in the console.

```js
items.forEach((item) => {
    console.log(item.name)
})

/*
result:
Bike
TV
Album
Book
Phone
Computer
Keyboard
*/
```

### some

this method does not return a new array, it returns either `true` or `false`

the example below can be described in this way: iterate through the array using `some`, if **any of** the `item.price` less than equal to 100, the entire thing return `true`

```js
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveItems)
/*
result:
true
*/
```

### every

similar to `some`. the difference between them is that `every` checks every single item and make sure that **each of the item** falls under the given condition. if all of the items fulfilled the condition, the entire thing will return `true`

```js
const hasInexpensiveItems = items.every((item) => {
    return item.price <= 100
})

/*
result:
false
*/
```

### reduce

this method is totally different than all the methods above

it's actually doing some operation on the array and returning a combination of all those different operations.

the callback function should takes an item and a property for what we want to reduce everything into

this method not only takes in a callback function, but also a starting point, can see it as a default value of a total

#### `reduce` method: detailed breakdown

take a look at the usage below, the reduce method takes in a function that run on every single item of the array. the first parameter of the function is going to be **whatever the previous iteration of this array returned** and the second parameter is the **actual item of the array**

in the first iteration, the `currentTotal` will be 0 as we already set it as `0` by passing it as the second parameter of the `reduce` method

so as the array being iterated, the value of `currentTotal` will change

```js
// calculate the total of price
// the total variable should place at the first
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)

/*
result:
1840
*/
```

### includes

this method does not takes in a function, but just a single argument

it's easy to be interpreted as well, just check whether an element exists in the array or not. if yes return `true`, else return `false`

```js
const nums = [1, 2, 3, 4, 5]

const includesTwo = nums.includes(2)

console.log(includesTwo)
```

### concat

used to merge two or more array. this method does not change the existing array but instead returns a new array

```js
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arr3 = arr1.concat(arr2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// concat three arrays
const arr4 = arr1.concat(arr2, arr3);
console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"]
```
