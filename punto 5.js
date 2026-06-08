function doble(numero) {
    return numero * 2;
}

function mitad(numero) {
    return numero / 2;
}

let numero = parseInt(prompt("Ingrese un número:"));

alert("Doble: " + doble(numero));
alert("Mitad: " + mitad(numero));

console.log("Doble:", doble(numero));
console.log("Mitad:", mitad(numero));