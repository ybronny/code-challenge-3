document.addEventListener('DOMContentLoaded', async () => {
  // Fetch movie data
  const movies = await fetchMovies();
  const firstMovie = await fetchMovieDetails(1);

  // Display movie details
  displayMovieDetails(firstMovie);

  // Display movie menu
  displayMovieMenu(movies);

  // Add event listeners
  document.querySelector('#buy-ticket').addEventListener('click', buyTicket);
  document.querySelector('#films').addEventListener('click', handleMovieClick);
});

async function fetchMovies() {
  const response = await fetch('http://localhost:3000/films');
  return await response.json();
}

async function fetchMovieDetails(id) {
  const response = await fetch(`http://localhost:3000/films/${id}`);
  return await response.json();
}

function displayMovieDetails(movie) {
  // Update DOM to display movie details
}

function displayMovieMenu(movies) {
  const filmsList = document.querySelector('#films');
  filmsList.innerHTML = '';
  movies.forEach(movie => {
      const li = document.createElement('li');
      li.textContent = movie.title;
      li.dataset.id = movie.id;
      filmsList.appendChild(li);
  });
}

async function buyTicket() {
  // Handle buying ticket
}

async function handleMovieClick(event) {
  if (event.target.tagName === 'LI') {
      const movieId = event.target.dataset.id;
      const movie = await fetchMovieDetails(movieId);
      displayMovieDetails(movie);
  }
}



const BASE_URL = "http://localhost:3000/films";

fetch(BASE_URL)
  .then((response) => response.json())
  .then((data) => {(data[0]);

function decrementTicket() {
  const ticketNumElement = document.getElementById("ticket-num");
  let ticketsRemaining = parseInt(ticketNumElement.textContent);
  if (ticketsRemaining > 0) {
    ticketsRemaining--;
    ticketNumElement.textContent = ticketsRemaining;
  } else {
    alert("Sorry, no more tickets available for this movie.");
  }
}

document.getElementById("buy-ticket").addEventListener("click", function () {
  decrementTicket();
});


    const filmsList = document.getElementById("films");
    data.forEach((movie) => {
      const listItem = document.createElement("li");
      listItem.classList.add("film", "item");
      listItem.textContent = movie.title;
      listItem.addEventListener("click", function () {
        updatePageInfo(movie);
      });
      filmsList.appendChild(listItem);
    });
  })
  