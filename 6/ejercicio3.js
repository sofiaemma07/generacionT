let frutasYVerduras = [
  {fruta:"banana"}, {verdura:"apio"}, {fruta:"manzana"}, 
  {fruta:"frutilla"}, {verdura:"zanahoria"}, {fruta:"kiwi"}, 
  {fruta:"sandia"}, {fruta:"melon"}, {verdura:"repollo"}, {fruta:"mango"}
];

function frootLoop(arr) {
  let frutas = [];
  for (let elemento of arr) {
    if (elemento.fruta) frutas.push(elemento.fruta);
  }
  return { frutas };
}

// Ejemplo:
console.log(frootLoop(frutasYVerduras));
// { frutas: ['banana', 'manzana', 'frutilla', 'kiwi', 'sandia', 'melon', 'mango'] }
