function Dolares(pesos) {
    return pesos / 1300; 
}

function Pesos(dolares) {
    return dolares * 1300; 
}

let monto = parseInt(prompt("Ingrese un monto:"));
let opcion = parseInt(prompt("Ingrese 1 para convertir a dólares o 2 para pesos:"));

if (opcion === 1) {
    alert("Monto en dólares: " + Dolares(monto));
    console.log("Monto en dólares:", Dolares(monto));
} else if (opcion === 2) {
    alert("Monto en pesos: " + Pesos(monto));
    console.log("Monto en pesos:", Pesos(monto));
} else {
    alert("Opción incorrecta");
}
