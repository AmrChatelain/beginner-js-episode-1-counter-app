// *info: Get references to elements from the HTML using their IDs
// "display" is where the number is shown
const display = document.getElementById("display");

// "up" is the button that increases the number
const up = document.getElementById("up");

// "down" is the button that decreases the number
const down = document.getElementById("down");

// Get the starting number from the display
// textContent returns text, so we convert it to a number using Number()
let current = Number(display.textContent);

// When the "up" button is clicked...
up.onclick = function () {
  // Increase the current number by 1
  current = current + 1;

  // Update the display so the new number appears on the screen
  display.textContent = current;
};

// When the "down" button is clicked...
down.onclick = function () {
  // Decrease the current number by 1
  current = current - 1;

  // Prevent the number from going below 0
  if (current < 0) {
    current = 0; // Reset to 0 if it becomes negative
  }

  // * * Update the display with the new number
  display.textContent = current;
};
