function calcularAñoNacimiento(personas) {
  let añoActual = new Date().getFullYear();
  for (let persona of personas) {
    persona.añoNacimiento = añoActual - persona.edad;
  }
  return personas;
}

// Ejemplo:
let test = [{nombre: "Juan", edad: 19}, {nombre: "Mario", edad: 22}];
console.log(calcularAñoNacimiento(test));
