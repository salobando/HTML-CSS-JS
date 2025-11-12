document.getElementById("titulo").innerHTML = "Ejercicio 1. Encuesta de intereses"
let votos = {
  web: 0,
  js: 0,
  bd: 0,
  total: 0
};
const form = document.getElementById("formulario-votos");

form.addEventListener("submit", function (e) {
  e.preventDefault();//evita recargar la paginas

  const opcion = form.elements.opcion.value;
  votos[opcion]++;
  votos.total++;
  for (let key in votos) {
    const span = document.getElementById(`v${key}`);
    if (span) {
      span.textContent = votos[key];
    }
  }
  alert("Gracias por tu voto!!");
  form.reset(); // limpia la selección

  if (votos.total % 5 === 0) {
    console.log(`Total acumulado: ${votos.total}`);
    document.getElementById("total").append(votos.total);
  }
})

document.getElementById("titulo").innerHTML = "Ejercicio 2. Carrito de compras"
let productos = [
  {nombre: "manzana",precio: 1800},
  {nombre: "sandia",precio: 3500},
  {nombre: "arandanos",precio: 6800}
];

