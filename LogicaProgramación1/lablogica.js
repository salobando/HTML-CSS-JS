const prompt = require("prompt-sync")();

let number1 = Number(prompt("Escriba un número: "));
let number2 = Number(prompt("Escriba un número: "));
let number3 = Number(prompt("Escriba un número: "));
function ordenarMenor() {
    let menor = [];
    if (number1 < number2 & number1 < number3) {
        menor[0] = number1;
        if (number2 < number3) {
            menor[1] = number2;
            menor[2] = number3;
        } else {
            menor[1] = number3;
            menor[2] = number2;
        }
        return menor;
    } else if (number2 < number1 & number2 < number3) {
        menor[0] = number2;
        if (number1 < number3) {
            menor[1] = number1;
            menor[2] = number3;
        } else {
            menor[1] = number3;
            menor[2] = number1;
        }
        return menor;
    } else if (number3 < number1 & number3 < number2) {
        menor[0] = number3;
        if (number1 < number2) {
            menor[1] = number1;
            menor[2] = number2;
        } else {
            menor[1] = number2;
            menor[2] = number1;
        }
        return menor;
    }
}

if (number1 == number2 & number1 == number3) {
    console.log("Los 3 números son iguales");     
} else {
    console.log("De mayor a menor -> ", ordenarMenor().reverse());
    console.log("De menor a mayor -> ", ordenarMenor());
}
