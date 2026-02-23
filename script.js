const display = document.getElementById("display");
const up = document.getElementById("up");
const down = document.getElementById("down");

let current = Number(display.textContent);

up.onclick = function () {
  current = current + 1;

  display.textContent = current;
};
down.onclick = function () {
  current = current - 1;
  if (current < 0) {
    current = 0;
  }
  display.textContent = current;
};
