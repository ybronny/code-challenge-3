const BASE_URL = "http://localhost:3000/films";

fetch(BASE_URL)
  .then((response) => response.json())
  .then((data) => {
    updatePageInfo(data[0]);
  

// This Function updates
function updatePageInfo(movieName) {
  document.getElementById("poster").src = movieName.poster;
  document.getElementById("title").textContent = movieName.title;
  document.getElementById("runtime").textContent = $;{movieName.runtime} minutes;
  document.getElementById("film-info").textContent = movieName.description;
  document.getElementById("showtime").textContent = movieName.showtime;
  document.getElementById("ticket-num").textContent = movieName.tickets_sold;
}

function decrementTicket() {
  const ticketNumElement = document.getElementById("ticket-num");
  let ticketsRemaining = parseInt(ticketNumElement.textContent);
  if (ticketsRemaining > 0) {ticketsRemaining--;
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
  .catch((error) => console.error("Error fetching movies:", error));