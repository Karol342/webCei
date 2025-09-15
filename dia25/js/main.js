//ejercicio 1 Crea un objeto alumno 
const alumno = {
    nombre : 'Carol',
    apellido : 'Tristan' ,
    edad: 23,
    curso: 'javaScript'
}

console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);

//ejercicio 1 -2 Deconstruye el objeto alumno y accede a sus propiedades mediante desestructuración
const { nombre, apellido, curso } = alumno;
console.log(nombre);
console.log(apellido);


//ejercicio 1 -3 Añade al objeto alumno un método que imprima el nombre completo (nombre + apellido) del alumno por consola.
alumno.print = function () {
    console.log (`Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`);
}
alumno.print();

//ej 2 -1 Crea una copia de un objeto usando el operador spread (...)
const copiaAlumno = {...alumno};
console.log(copiaAlumno);

//ej 2 -3 Junta varios arrays en uno solo usando spread.
const numeros = [3,5,8];
const masNumeros = [7, ...numeros,10];
const array3 = [...numeros, ...masNumeros];
console.log(masNumeros);
console.log(array3);

//ej 2-3 Crea una función que acepte un número indefinido de argumentos y devuelva su suma utilizando el operador rest
function multiplicar (...args) {
    return args.reduce((a,b) => a*b);
}
console.log(multiplicar(1,2,2,5));

//ej 2-4 Extrae parte de un array o de un objeto usando rest en la desestructuración.
const {nombre: nombreAlumno, ...restoDatos } = alumno;
console.log(nombreAlumno);
console.log(restoDatos);


//ej 3-1 Crea un HTML con un <p> y usa JavaScript para cambiar su contenido.
const texto = document.getElementById('texto');
texto.textContent = "Hola desde JS";

//ej 3-2 Crea una etiqueta <ul> y añadele un <li> usando JavaScript.
const lista = document.getElementById('lista');
const li = '<li>Uno</li><li>Otro</li>';
lista.innerHTML = li;

//ej 3-3 Cambia el color de un elemento cuando se haga clic en él.
texto.addEventListener('click', () => {
    texto.style.color = "red";
});

//ej 3-4 Elimina un elemento del DOM al pulsar un botón.
const boton = document.getElementById('boton');
boton.addEventListener('click', () => {
    lista.innerHTML = "";
});

//eh 3-5 Crea un contador que se incremente cada vez que haces clic en un botón.
const contador = document.getElementById('contador');
const boton2 = document.getElementById('boton2');
let count = 0;
boton2.addEventListener('click', () =>{
    count++;
    contador.textContent = count;
});