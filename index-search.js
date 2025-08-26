// ===== Search Filter for Anime Index =====
const searchInput = document.getElementById('searchInput');
const animeList = document.getElementById('animeList');
const groups = animeList.getElementsByClassName('index-group');

searchInput.addEventListener('keyup', function () {
  const filter = searchInput.value.toLowerCase();

  Array.from(groups).forEach(group => {
    const items = group.getElementsByTagName('li');
    let groupHasMatch = false;

    Array.from(items).forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(filter)) {
        item.style.display = '';
        groupHasMatch = true;
      } else {
        item.style.display = 'none';
      }
    });

    // Hide the entire letter group if no matches found
    group.style.display = groupHasMatch ? '' : 'none';
  });
});
