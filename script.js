const form = document.querySelector("#raffle-form");
const nameInput = document.querySelector("#name");
const participantList = document.querySelector("#participant-list");
const drawButton = document.querySelector("#draw-button");
const resetButton = document.querySelector("#reset-button");
const winner = document.querySelector("#winner");

const participants = [];

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Keep the page from reloading.

  const name = nameInput.value.trim();

  // Ignore entries that contain only spaces.
  if (name === "") {
    nameInput.value = "";
    return;
  }

  participants.push(name);

  // Add the name to the visible list as plain text.
  const listItem = document.createElement("li");
  listItem.textContent = name;
  participantList.appendChild(listItem);

  nameInput.value = "";
  winner.textContent = "";
  nameInput.focus();
});

drawButton.addEventListener("click", function () {
  if (participants.length === 0) {
    winner.textContent = "Add a participant before drawing a winner.";
    return;
  }

  // Pick a random position in the participants array.
  const randomIndex = Math.floor(Math.random() * participants.length);
  const winningName = participants[randomIndex];

  winner.textContent = `🎉 ${winningName} wins the cake! 🍰`;
});

resetButton.addEventListener("click", function () {
  // Clear the stored names and the visible results.
  participants.length = 0;
  participantList.textContent = "";
  winner.textContent = "";
  nameInput.value = "";
  nameInput.focus();
});