# Exercise 1

Search beer by name from the brewdog API. Display the results grouped by first brewed year and sorted by name within each group. For each group title, display the year brewed, the total volume for the group, and the max IBU for the beers in that group.

- The format for searching by name is https://api.punkapi.com/v2/beers?beer_name=punk
- The API documentation is here: https://punkapi.com/documentation/v2

## Available functions:

- `addGroup(header, entries)`  
  Takes a header name and a list of entries to display in the group. The group will be created and added to the results page
- `createEntry(name, imgSource, description)`  
  Creates and returns and entry to be added to a group
- `clearGroups()`  
  Clears/removes the results groups
