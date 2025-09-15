//Ejercicio 2
const textarea1 = document.getElementById('texto1');
const boton1 = document.getElementById('boton1');
const primerParrafo = document.getElementById('primer-parrafo');

boton1.addEventListener('click', () => {
    const texto = textarea1.value;
    primerParrafo.innerText = texto;
});


//Ejercicio 3
const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');
const boton2 = document.getElementById('boton2');
const resul = document.getElementById('resul');

boton2.addEventListener('click' , () => {
    resul.innerText = parseFloat(num1.value) + parseFloat(num2.value);
});