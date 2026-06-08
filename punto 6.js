function mayor(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

let numeroA = parseInt(prompt("Ingrese el primer número:"));
let numeroB = parseInt(prompt("Ingrese el segundo número:"));

alert("El mayor es: " + mayor(numeroA, numeroB));
console.log("El mayor es:", mayor(numeroA, numeroB));