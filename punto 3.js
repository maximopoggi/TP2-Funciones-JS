function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let operacion = prompt("Ingrese que desea hacer (+, -, *, /):");

let resultado;

switch (operacion) {
    case "+":
        resultado = sumar(num1, num2);
        break;
    case "-":
        resultado = restar(num1, num2);
        break;
    case "*":
        resultado = multiplicar(num1, num2);
        break;
    case "/":
        resultado = dividir(num1, num2);
        break;
    default:
        resultado = "Operación inválida";
}

alert("Resultado: " + resultado);
console.log("Resultado:", resultado);

