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
//Fahrenheit a Celcius//
let Fahrenheit = parseFloat(prompt("Ingrese los grados Fahrenheit:"))
let Celcius = (Fahrenheit - 32)+ 5/9
alert("La temperatura en grados Celcius es " + Celcius + " C°")
 //Calculadora de Edad//
 let AñoDeNacimiento = parseFloat(prompt("Ingrese su año de nacimiento"))
 let AñoActual = 2024
 let Edad = AñoActual - AñoDeNacimiento 
 alert("Su edad es " + Edad)
//Saludo//
let Nombre = (prompt("Ingrese su nombre"))
let Apellido = (prompt("Ingrese su Apellido"))

alert("Bienvenido " + Nombre +" "+ Apellido + "Disfrute su visita :)")
