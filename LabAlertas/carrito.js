let totalItems = 0;
let totalPrecio = 0;
let carrito = [];

function agregarProducto(nombre, precio) {
    totalItems++;
    totalPrecio += precio;
    carrito.push(nombre);

    document.getElementById("total-items").textContent = totalItems;
    document.getElementById("total-precio").textContent = totalPrecio;

    if (totalPrecio > 50) {
        alert("¡Envío gratis aplicado!");
    }
    
    console.log("Productos en el carrito:", carrito);
}

function vaciarCarrito() {
  totalItems = 0;
  totalPrecio = 0;
  carrito = [];
  // Actualizar los valores en pantalla
  document.getElementById("total-items").textContent = totalItems;
  document.getElementById("total-precio").textContent = totalPrecio;
  alert("Carrito vaciado");
  console.clear();
}