const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const searchText = searchInput.value;
  console.log('Search Text:', searchText);
  // Add your search logic here
});
