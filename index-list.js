// ===== Easy Anime Index Loader =====
const container = document.getElementById('anime-index');
container.innerHTML = 'Loading Anime List...';

fetch('https://api.jikan.moe/v4/anime?order_by=title&sort=asc&limit=50')
  .then(response => response.json())
  .then(data => {
    if (!data.data || data.data.length === 0) {
      container.innerHTML = '<p>No anime found.</p>';
      return;
    }

    container.innerHTML = '<ul>' +
      data.data.map(anime => `
        <li>
          <a href="https://www.crunchyroll.com/search?from=search&q=${encodeURIComponent(anime.title)}"
             target="_blank">${anime.title}</a>
        </li>
      `).join('') +
    '</ul>';
  })
  .catch(error => {
    console.error('Error fetching anime:', error);
    container.innerHTML = '<p style="color:red;">Failed to load anime index.</p>';
  });