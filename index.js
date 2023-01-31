const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');
const moviesList = document.querySelector('#moviesList');

if (searchInput && searchBtn && moviesList) {
  searchBtn.addEventListener('click', async () => {
    const searchTerm = searchInput.value;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f32b07c54012b068e434f26d8a0495b1&query=${searchTerm}`);
    const data = await response.json();
    const movies = data.results;
  
    movies.forEach(movie => {
      const movieEl = document.createElement('li');
      movieEl.innerHTML = `${movie.title} <button class="deleteBtn">Delete</button>`;
  
      movieEl.querySelector('.deleteBtn').addEventListener('click', () => {
        movieEl.remove();
      });
  
      moviesList.appendChild(movieEl);
    });
  });
}
