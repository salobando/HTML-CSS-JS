let valor = 0;
const contador = document.getElementById('contador');
// Función para actualizar el contador
function actualizarContador() {
    contador.textContent = valor;
    if (valor >= 10) {
        contador.classList.add('cambiar');
    } else {
        contador.classList.remove('cambiar');
    }
}

document.getElementById('incrementar').addEventListener('click',function(){
    valor ++;
    actualizarContador();
})
document.getElementById('decrementar').addEventListener('click',function(){
    valor --;
    actualizarContador();
})