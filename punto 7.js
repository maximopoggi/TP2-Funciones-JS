function convertirADolares(pesos) {
    return pesos / 1300; 
}

function convertirAPesos(dolares) {
    return dolares * 1300; 
}

let monto = parseInt(prompt("Ingrese un monto:"));
let opcion = parseInt(prompt("Ingrese 1 para convertir a dólares o 2 para convertir a pesos:"));

if (opcion === 1) {
    alert("Monto en dólares: " + convertirADolares(monto));
    console.log("Monto en dólares:", convertirADolares(monto));
} else if (opcion === 2) {
    alert("Monto en pesos: " + convertirAPesos(monto));
    console.log("Monto en pesos:", convertirAPesos(monto));
} else {
    alert("Opción incorrecta");
}
