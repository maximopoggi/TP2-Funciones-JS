function calcularpromedio(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

let nota1 = parseInt(prompt("Ingrese la nota del primer trimestre:"));
let nota2 = parseInt(prompt("Ingrese la nota del segundo trimestre:"));
let nota3 = parseInt(prompt("Ingrese la nota del tercer trimestre:"));

let promedioNotas = calcularpromedio(nota1, nota2, nota3);

alert("Promedio: " + promedioNotas);

if (promedioNotas >= 7) {
    alert("Aprobado");
    console.log("Aprobado");
} else {
    alert("Desaprobado");
    console.log("Desaprobado");
}