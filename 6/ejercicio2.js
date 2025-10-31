function biggestOne(num1, num2, palabra) {
  if (num1 > num2) return num1;
  else if (num2 > num1) return num2;
  else return palabra[0] + palabra[palabra.length - 1];
}

// Ejemplos:
console.log(biggestOne(16, 2, "Haz")); // 16
console.log(biggestOne(3, 3, "Haz"));  // "Hz"
