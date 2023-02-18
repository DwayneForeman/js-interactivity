const message = document.querySelector("#message");

function addMovie(event) {
  event.preventDefault();
  const inputField = document.querySelector("input");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  movie.appendChild(deleteBtn);
  const movieList = document.querySelector("ul");
  movieList.appendChild(movie);

  inputField.value = "";

  deleteBtn.addEventListener("click", deleteMovie);
  //message.textContent = "";
}

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = `Movie ${event.target.previousElementSibling.textContent} deleted!`;
  revealMessage(message);
}

const form = document.querySelector("form");
form.addEventListener("submit", addMovie);

function crossOffMovie(event) {
  event.target.classList.toggle("checked");

  if (event.target.classList.contains("checked")) {
    message.textContent = `Movie ${event.target.textContent}watched!`;
  } else {
    message.textContent = `Movie ${event.target.textContent}added back!`;
  }

  revealMessage(message);
}

function revealMessage(message) {
  setTimeout(() => message.setAttribute("class", "hide"), 1000);
}
