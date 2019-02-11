const onSearch = async e => {
  // stop the default form action
  e.preventDefault();
  clearGroups();

  // pull out search text from the search input box
  const searchTerm = document.getElementById('searchText').value;

  // TODO: fetch and display results
};

// add event listener to submitting the form
// (submit button click also works, but this will work even when hitting enter)
document.getElementById('searchForm').addEventListener('submit', onSearch);
