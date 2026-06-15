function mayor(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

let nA = parseInt(prompt("Ingrese el primer número:"));
let nB = parseInt(prompt("Ingrese el segundo número:"));

alert("El mayor es: " + mayor(nA, nB));
console.log("El mayor es:", mayor(nA, nB));
