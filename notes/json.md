# JSON

JSON, also known as **J**ava**S**cript **O**bject **N**otation is a *Data Reprensentation Format*. It is commonly used for **APIs** and **Configs**. It is used because it's **lightweight** and makes developers easy to **Read/Write** compared to something like `XML`. It's also much more cleaner to read and much more easier to interact with JavaScript. In fact, most languages have some sort of library or functionality that could use to integrate with JSON, which makes it even more versatile.

## JSON Types

JSON supports these types of data:

1. **Strings**: `"Hello World"` `"Kyle"` `"I"`
2. **Numbers**: `10` `1.5` `-20` `1.3e10`
3. **Booleans**: `true` `false`
4. **null**: `null`
5. **Arrays**: `[1,2,3]` `["Hello", "World"]`
6. **Objects**: `{"key": "value"}` `{"age":30}`

> Objects are the most complex yet the most used types in JSON

## JSON Syntax

Add `.json` at the end of a file name to create a JSON file

// below is an object

```json
{
    "name": "kyle",
    "favouriteNumber": 3,
    "isProgrammer": true,
    "hobbies": ["weight lifting", "bowling"],
    "friends": [{
        "name": "Joey",
        "favouriteNumber": 100,
        "isProgrammer": false,
        "friends": []
    }]
}
```

### Practices

below is an array of objects

```json
[
    {
        "name": "Big Corporation",
        "numberOfEmployees": 10000,
        "ceo": "Mary",
        "rating": 3.6
    },
    {
        "name": "Small Startup",
        "numberOfEmployees": 3,
        "ceo": null,
        "rating": 4.3
    }
]
```

Normally when we are dealing with JSON, most of the time the format of JSON that we will receive is in a `String` format. So how should we make it into `JSON` format? We can solve this by using `JSON.parse()` and pass in our JSON in String format. This function will then convert the string into a JavaScript Object.
