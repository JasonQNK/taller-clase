//Calculadora de precios de productos//
let producto1 = parseFloat(prompt("Ingresa precio del primer producto:"))
let producto2 = parseFloat(prompt("Ingresa precio del segundo producto:"))
let producto3 = parseFloat(prompt("Ingresa precio del tercer producto:"))
let total = producto1 + producto2 + producto3
alert("El total a pagar es: $" + total)
//Calculadora de Area //
let ancho = parseFloat(prompt("Ingresa el ancho de la pared:"))
let alto = parseFloat(prompt("Ingrese el alto de la pared:"))
let area = ancho * alto
alert("El area es: "  + area + " m2")
//Calculadora de perimetro //
let largoPotrero = parseFloat(prompt("Ingrese el largo del potrero:"))
let anchoPotrero = parseFloat(prompt("Ingrese el ancho del potrero:"))
let perimetro = 2 * (largoPotrero + anchoPotrero)
alert("El perimetro del potrero es: " + perimetro + " metros")


