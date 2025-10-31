let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];

function dispenserGaseosas(unidades, gaseosas) {
  let gaseosasEnStock = {};
  
  for (let i = 0; i < gaseosas.length; i++) {
    gaseosasEnStock[gaseosas[i]] = unidades[i];
  }

  return gaseosasEnStock;
}

// Ejemplo de uso:
let stock = dispenserGaseosas(unidades, gaseosas);
console.log(stock); // { cocacola: 1, sprite: 2, fanta: 3, 'seven up': 4 }

// Consultar si hay una gaseosa:
let pedido = "sprite";
if (stock[pedido]) console.log(`Hay stock de ${pedido}.`);
else console.log(`No hay stock de ${pedido}.`);
