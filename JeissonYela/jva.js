//--------------------------------------//
// Calculadora de precios de productos //
//--------------------------------------//
let producto1 = parseFloat(prompt("Ingresa precio del primer producto:"));
let producto2 = parseFloat(prompt("Ingresa precio del segundo producto:"));
let producto3 = parseFloat(prompt("Ingresa precio del tercer producto:"));
let total = producto1 + producto2 + producto3;
alert("El total a pagar es: $" + total);

//--------------------------------------//
// Calculadora de área //
//--------------------------------------//
let ancho = parseFloat(prompt("Ingresa el ancho de la pared (en metros):"));
let alto = parseFloat(prompt("Ingrese el alto de la pared (en metros):"));
let area = ancho * alto;
alert("El área es: " + area + " m²");

//--------------------------------------//
// Calculadora de perímetro //
//--------------------------------------//
let largoPotrero = parseFloat(prompt("Ingrese el largo del potrero (en metros):"));
let anchoPotrero = parseFloat(prompt("Ingrese el ancho del potrero (en metros):"));
let perimetro = 2 * (largoPotrero + anchoPotrero);
alert("El perímetro del potrero es: " + perimetro + " metros");

//--------------------------------------//
// Conversor de Fahrenheit a Celsius //
//--------------------------------------//
let Fahrenheit = parseFloat(prompt("Ingrese los grados Fahrenheit:"));
let Celsius = (Fahrenheit - 32) * 5 / 9;
alert("La temperatura en grados Celsius es: " + Celsius.toFixed(2) + " °C");

//--------------------------------------//
// Calculadora de edad //
//--------------------------------------//
let AñoDeNacimiento = parseFloat(prompt("Ingrese su año de nacimiento:"));
let AñoActual = 2024;
let Edad = AñoActual - AñoDeNacimiento;
alert("Su edad es: " + Edad + " años");

//--------------------------------------//
// Saludo personalizado //
//--------------------------------------//
let Nombre = prompt("Ingrese su nombre:");
let Apellido = prompt("Ingrese su apellido:");
alert("Bienvenido " + Nombre + " " + Apellido + " Disfrute su visita :)");

//--------------------------------------//
// Calculador de promedio //
//--------------------------------------//
let Nota1 = parseFloat(prompt("Ingrese la nota 1:"))
let Nota2 = parseFloat(prompt("Ingrese la nota 2:"))
let Nota3 = parseFloat(prompt("Ingrese la nota 3:"))
let Promedio = (Nota1 + Nota2 + Nota3) / 3
alert("El promedio de las notas es: " + Promedio)

//--------------------------------------//
// Calculador de salario Semanal//
//--------------------------------------//
let NumeroHoras = parseFloat(prompt("Ingrese el numero de horas trabajadas"))
let PrecioHora = 50000

let Salario = NumeroHoras * PrecioHora

alert ("El salario a la semana es " + Salario)

//--------------------------------------//
// Millas a Kilometros //
//--------------------------------------//
let Millas = parseFloat(prompt("Ingrese las millas a convertir"))
let Kilometros = Millas * 1.60934

alert("La conversion a Kilometros es " + Kilometros)

//--------------------------------------//
// Calculadora De Tiempo//
//--------------------------------------//
let Minutos = parseFloat(prompt("Ingrese los minutos a calcular"))
let horas = Minutos / 60

alert("La conversion a Horas es " + horas)

//--------------------------------------//
// Precio Final Producto//
//--------------------------------------//

let PrecioProducto = parseFloat(prompt("Ingrese el precio del producto"))
let Descuento = PrecioProducto * 0.20
let PrecioFinal = PrecioProducto - Descuento

alert("El precio final del producto es " + PrecioFinal)
