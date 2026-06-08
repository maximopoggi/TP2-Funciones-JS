function promedioPares(n) {
    let suma = 0;
    let cantidad = 0;

    for (let i = 11; i <= n; i++) {
        if (i % 2 === 0) {
            suma += i;
            cantidad++;
        }
    }

    if (cantidad === 0) {
        return 0;
    }

    return suma / cantidad;
}

let n = parseInt(prompt("Ingrese un número para calcular el promedio de los pares mayores a 10:"));
let promedio = promedioPares(n);
alert("Promedio: " + promedio);
console.log("Promedio:", promedio);
