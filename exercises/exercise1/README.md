# Exercise 1

Implement a beer search tool by completing the subtasks below. Add your solution code to `exercise1.js`.

Run `npm install` to install the required dependencies if you haven't already done so.

Run `npm run exercise1` to start the client server. The app will be available on http://localhost:5000

## Subtasks

1. Fetch results from api. Call `fetch()` to the https://api.punkapi.com/v2/beers?beer_name=\<insert search term here\> endpoint. Log the results with `console.log()`. Hint: Look at the async/await example in example number 13 (`examples/13-async-await.js`).
2. Create a function to extract the brewed year from a single beer.
3. Using the function created above, group the results by the first brewed year and sort by name ascending within each group (see the reference links below).
4. For each year group, create a result group with the `addGroup()` function. For each beer within the year group, you should create an array of display entries with the `createEntry()` function (see the available functions below for full details). At this point you should be able to see the results on the screen.

### Additional Tasks

1. Create a function to calculate the total volume within each group, and add this to the header for each group.
2. Create a function to calculate the max [IBU](https://beerconnoisseur.com/articles/whats-meaning-ibu) within each group, and add this to the header for each group.

## API

You will be using the following API:

- The format for searching by name is https://api.punkapi.com/v2/beers?beer_name=punk
- The API documentation is here: https://punkapi.com/documentation/v2

An example response is:

```json
[
  {
    "id": 192,
    "name": "Punk IPA 2007 - 2010",
    "first_brewed": "04/2007",
    "description": "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
    "image_url": "https://images.punkapi.com/v2/192.png",
    "ibu": 60.0,
    "volume": {
      "value": 20,
      "unit": "liters"
    },
    ...
  },
  {
    "id": 192,
    "name": "Punk IPA",
    ...
  }
]
```

## Available functions:

The following functions are available for you to use from the window scope, and can be called from anywhere:

- `addGroup(header: string, entries: Entry[])`  
  Takes a header name and a list of entries to display in the group. The group will be created and added to the results page
- `createEntry(name: string, imgSource: string, description: string): Entry`  
  Creates and returns and entry to be added to a group
- `clearGroups()`  
  Clears/removes the results groups

## Useful References

- Array Manipulation: https://www.w3schools.com/jsref/jsref_obj_array.asp
- String Manipulation: https://www.w3schools.com/jsref/jsref_obj_string.asp
