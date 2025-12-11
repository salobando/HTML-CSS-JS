
document.getElementById("formulario").addEventListener("submit", function (e){
    e.preventDefault();

    const num = Number(document.getElementById("numero").value);
    
    factorial(num);

});


function factorial(num) {
    if (num >= 0) {
        let suma=1;
        for(let i=1; i<=num; i++){
            suma *= i;
        }
        document.getElementById("resultado").textContent = "El factorial es: "+suma;
        
    } else {        
        alert("Ingrese un número valido");
    }
}
