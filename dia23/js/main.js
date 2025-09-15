// Ejercicio 1-1
const primerParrafo = document.querySelector("#primer-parrafo");
primerParrafo.innerText = "Hola Mundo";


//Ejercicio 1 -2
const segundoParrafo = document.querySelector("#segundo-parrafo");
segundoParrafo.style.color="blue";
segundoParrafo.style.fontSize="40px";
segundoParrafo.style.fontWeight="bold";

//Ejercicio 1 - 3
const tercerParrafo = document.querySelector("#tercer-parrafo");
const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");

boton1.addEventListener("click",()=> {
    tercerParrafo.style.color = "red";
})

boton2.addEventListener("click",()=>{
    tercerParrafo.style.color ="green";
})

// Ejercicio 2

const PI = 3.14;
let radio = 5;

function areaCirculo(r) {
    return PI * r * r;
}

let n1 = 10;
let n2 = 20;
console.log("El area del circulo es " + areaCirculo(n1));
console.log("El area del circulo es " + areaCirculo(n2));


//Ejercicio 3

const boton3 = document.querySelector("#boton3");
boton3.addEventListener("click", () => {
    alert("Boton clickeado");
});


let b;

console.log(b, "Antes del If");

    if(false) {
        b = 3;
    }

console.log(b, "despues del If");