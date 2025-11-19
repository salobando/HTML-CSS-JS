let imagenSeleccionada = null;

document.getElementById("imagen").addEventListener("change", function (event) {
    const file = event.target.files[0]; //contiene la imagen que se subio
    const preview = document.getElementById("preview");

    if (file) {
        imagenSeleccionada = file;
        preview.src = URL.createObjectURL(file);
        //eliminar la clase hidden para ver la imagen 
        preview.classList.remove("preview-hidden");
    }
})


document.getElementById("publicar").addEventListener('click', function (e) {
    e.preventDefault();
    const nuevaimg = document.createElement("img");
    const titulo = document.getElementById("titulo").value.trim();
    const descri = document.getElementById("mensaje").value.trim();
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-pub");

    const tit = document.createElement("h3");
    tit.textContent = titulo;
    const text = document.createElement("p");
    text.textContent = descri;
    nuevaimg.src = URL.createObjectURL(imagenSeleccionada);

    tarjeta.appendChild(tit);
    tarjeta.appendChild(text);
    tarjeta.appendChild(nuevaimg);
    
    document.getElementById("contenedor-publicaciones").appendChild(tarjeta);

})