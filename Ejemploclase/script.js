document.getElementById("titulo").innerHTML = "Hola a todos"

document.getElementById("agregar").addEventListener('click',function(){
    const input = document.getElementById("nueva-tarea");
    const texto = input.value;

    if(texto){
        const li = document.createElement('li');
        li.textContent = texto;
        document.getElementById('lista-tareas').append
    }
})
