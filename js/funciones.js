//crear un array con frases
const frases = [
    "Te va a tocar la lotería",
    "Tira otra vez",
    "No salgas hoy",
    "Una sorpresa te espera en tu casa",
    "Te van a subir el sueldo"
]

//seleccionar un elemento del DOM
let parrafo = document.getElementById("txtResultado")

let boton = document.getElementById("botonSuerte")

//Añadir un evento al boton
boton.addEventListener("click", mostrarFrase)

//crear una función que muestre uno de los elementos del array
function mostrarFrase(){
    let indice = Math.random() * frases.length
    indice = Math.floor(indice)

    parrafo.innerText = frases[indice]
}