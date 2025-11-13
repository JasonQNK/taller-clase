//Calculadora de precios de productos//
let producto1 = parseFloat(prompt("Ingresa :"));
let producto2 = parseFloat(prompt("Ingresa el precio del segundo producto:"));
let producto3 = parseFloat(prompt("Ingresa el precio del tercer producto:"));
let total = producto1 + producto2 + producto3;
alert("El total a pagar es: $" + total.toFixed(2));
// //
let ancho = parseFloat(prompt("Ingresa el ancho de la pared en metros:"));
let alto = parseFloat(prompt("Ingresa el alto de la pared en metros:"));
let area = ancho * alto;
alert("El área de la pared es: " + area.toFixed(2) + " m²");
