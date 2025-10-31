/**
 * Genera una cadena de FizzBuzz personalizada.
 *
 * @param {string} palabra1 
 * @param {string} palabra2
 * @param {number} hastaNum 
 * @param {number} fizz_num 
 * @param {number} buzz_num 
 * @returns {string} 
 */
function fizzBuzz2(palabra1, palabra2, hastaNum, fizz_num, buzz_num) {
  
  // Usamos un array para guardar los resultados temporalmente.
  let resultados = [];

  // Usamos un bucle 'for' para contar desde 1 hasta 'hastaNum'.
  for (let i = 1; i <= hastaNum; i++) {
    
    // Verificamos la condición más específica PRIMERO:
    // ¿Es múltiplo de AMBOS números?
    if (i % fizz_num === 0 && i % buzz_num === 0) {
      resultados.push(palabra1 + palabra2);
    } 
    // ¿Es múltiplo sólo de 'fizz_num'?
    else if (i % fizz_num === 0) {
      resultados.push(palabra1);
    } 
    // ¿Es múltiplo sólo de 'buzz_num'?
    else if (i % buzz_num === 0) {
      resultados.push(palabra2);
    } 
    // Si no es múltiplo de ninguno, guardamos el número.
    else {
      resultados.push(i);
    }
  }

  return resultados.join(', ');
}

// Llamamos a la función con nuestros argumentos
let miResultado = fizzBuzz2("Hola", "Mundo", 20, 3, 5);

// Mostramos el resultado en la consola
console.log(miResultado);