function evaluarRendimiento(nota) {
  if (nota >= 0 && nota < 2) return "Muy mal";
  else if (nota >= 2 && nota < 5) return "Mal";
  else if (nota >= 5 && nota < 6) return "Tan cerca pero tan lejos";
  else if (nota >= 6 && nota < 8) return "Bien!";
  else if (nota >= 8 && nota <= 10) return "Muy bien!!";
  else return "Nota inválida";
}

// Ejemplo:
console.log(evaluarRendimiento(7)); // "Bien!"
