function Par(numero) {
    if (numero % 2 === 0) {
        return 1;
    }
    return 0;
}

let nParImp = parseInt(prompt("Ingrese un número:"));

if (Par(nParImp) === 1) {
    alert("Par");
    console.log("Par");
} else {
    alert("Impar");
    console.log("Impar");
}
