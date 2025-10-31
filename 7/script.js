const body = document.querySelector("body");
const img = document.querySelector(".raton");

let seguirMouse = false; // bandera para detectar si el mouse está presionado

// Cuando se presiona el mouse
body.addEventListener("mousedown", () => {
  seguirMouse = true;
});

// Cuando se suelta el mouse
body.addEventListener("mouseup", () => {
  seguirMouse = false;
});

// Evento para mover la imagen
body.addEventListener("mousemove", (evento) => {
  if (seguirMouse) {
    img.style.top = evento.clientY + "px";
    img.style.left = evento.clientX + "px";
  }
});
