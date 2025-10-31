const words = [
 'californication',
 'plataforma5',
 'black',
 'summer',
 'flea',
 'aeroplane',
 'peppers',
 'unlimited',
 'arcadium',
 'love',
 'getaway',
 'stadium',
 'quixoticelixer',
 'quarter',
 'snow',
 'dylan',
 'zephyr',
 'funky',
 'chili'
];

const randomWordElement = document.getElementById('randomWord');
const text = document.getElementById('text');
const timeSpan = document.getElementById('timeSpan');
const scoreElement = document.getElementById('score');
const endGameContainer = document.getElementById('end-game-container');
const main = document.querySelector('.main');

let palabraAleatoria;
let time = 10;
let score = 0;

function randomWords() {
  return words[Math.floor(Math.random() * words.length)];
}

function addToDOM() {
  palabraAleatoria = randomWords();
  randomWordElement.textContent = palabraAleatoria;
}

addToDOM();

// Evento input
text.addEventListener('input', (e) => {
  const palabraIngresada = e.target.value.trim();
  if (palabraIngresada === palabraAleatoria) {
    updateScore();
    time += 3;
    e.target.value = '';
    addToDOM();
  }
});

function updateScore() {
  score++;
  scoreElement.textContent = score;
}

// Tiempo
const timeInterval = setInterval(actualizarTiempo, 1000);

function actualizarTiempo() {
  time--;
  timeSpan.textContent = `${time}s`;
  if (time <= 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  main.remove();
  endGameContainer.innerHTML = `
    <h1>¡Se acabó el tiempo!</h1>
    <p>Tu puntaje final es: <strong>${score}</strong></p>
    <button onclick="location.reload()">Jugar de nuevo</button>
  `;
  endGameContainer.style.display = 'block';
}
