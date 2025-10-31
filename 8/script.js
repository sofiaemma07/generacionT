let numSquares = 6;
let colors;
let pickedColor;

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const h1 = document.querySelector("h1");
const resetButton = document.getElementById("reset");
const easyBtn = document.getElementById("easyBtn");
const hardBtn = document.getElementById("hardBtn");
const modeButtons = [easyBtn, hardBtn];

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  modeButtons.forEach(btn => {
    btn.addEventListener("click", function() {
      modeButtons.forEach(b => b.classList.remove("selected"));
      this.classList.add("selected");
      numSquares = this.textContent.trim().toLowerCase() === "easy" ? 3 : 6;
      reset();
    });
  });
}

function setupSquares() {
  squares.forEach(square => {
    // Aseguramos estado inicial (por si se recargó)
    square.style.opacity = "1";
    square.style.pointerEvents = "auto";

    square.addEventListener("click", function() {
      const clickedColor = this.style.backgroundColor;
      if (!clickedColor) return;

      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "¡Correcto!";
        resetButton.textContent = "Jugar de nuevo?";
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
      } else {
        // Efecto de "desaparecer" con transición (CSS tiene transition sobre opacity)
        this.style.backgroundColor = getComputedStyle(document.body).backgroundColor;
        this.style.opacity = "0";
        this.style.pointerEvents = "none";
        messageDisplay.textContent = "Intentalo nuevamente";
      }
    });
  });
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  // Mostrar en mayúsculas como pide el PDF ("RGB( ... )")
  colorDisplay.textContent = pickedColor.toUpperCase();
  resetButton.textContent = "Nuevos Colores";
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "#005187";

  squares.forEach((square, i) => {
    if (colors[i]) {
      square.hidden = false;
      square.style.backgroundColor = colors[i];
      // Restaurar visual y comportamiento (por si antes fue clickeado)
      square.style.opacity = "1";
      square.style.pointerEvents = "auto";
    } else {
      // Ocultar completamente los cuadrados extra en modo Easy
      square.hidden = true;
    }
  });
}

resetButton.addEventListener("click", reset);

function changeColors(color) {
  squares.forEach(square => {
    // Mostrar todos los cuadrados y ponerles el color ganador
    square.hidden = false;
    square.style.backgroundColor = color;
    square.style.opacity = "1";
    square.style.pointerEvents = "none"; // ya no se necesita seguir clickeando
  });
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
