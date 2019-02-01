// fetch the results from the API for the given search term
const getResults = async searchTerm => {
  const response = await fetch(
    `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`
  );
  return await response.json();
};

// get the brewed year for the given beer
const getYear = beer => /\d{2}\/(\d{4})/i.exec(beer.first_brewed)[1];

// sort by name comparator function
const byName = (a, b) => a.name.localeCompare(b.name);

// return the total volume for all beers in the list
const totalVolume = beers =>
  beers.reduce((total, beer) => total + beer.volume.value, 0);

// return the max IBU value for every beer in the list
const maxIBU = beers =>
  beers.map(beer => beer.ibu).reduce((a, b) => Math.max(a, b), 0);

const onSearch = async e => {
  // stop the default form action
  e.preventDefault();

  // clear the existing groups
  clearGroups();

  // get the search results from the API
  const results = await getResults(document.getElementById('searchText').value);

  // groups the results by brewed year
  const groups = results.reduce(
    (groups, result) => ({
      ...groups,
      [getYear(result)]: (groups[getYear(result)] || []).concat([result])
    }),
    {}
  );

  // add the new groups to the app
  for (const year of Object.keys(groups)) {
    // create header by calculating total volume and max IBU
    const header = `${year} - Total Volume: ${totalVolume(
      groups[year]
    )}, Max IBU: ${maxIBU(groups[year])}`;

    // create the group, creating the elements within by mapping the beers
    addGroup(
      header,
      groups[year]
        .sort(byName)
        .map(beer => createEntry(beer.name, beer.image_url, beer.description))
    );
  }
};

// add event listener to submitting the form
// (submit button click also works, but this will work even when hitting enter)
document.getElementById('searchForm').addEventListener('submit', onSearch);
