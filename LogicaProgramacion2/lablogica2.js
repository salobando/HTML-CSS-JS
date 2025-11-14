const prompt = require("prompt-sync")();

function tiponum(temperatura) {
    let valor;

    // verificar si es valida la entrada
    while (true) {
        valor = prompt(temperatura);
        let numero = Number(valor);
        if (!isNaN(numero) && valor.trim() !== "") {
            return numero
        }
        console.log("Error: Ingrese un número válido");
    }
}

let celsius = tiponum("Ingrese la temperatura en grados Celsius: ");

let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 1.8) + 32;
console.log("Grados Celsius: ",celsius);
console.log("Grados Kelvin: ", kelvin);
console.log("Grados Fahrenheit:", fahrenheit);





