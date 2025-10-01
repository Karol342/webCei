
//Crea una web con 5 botones. Cada vez que pulses uno, debe cambiar su color de fondo de forma aleatoria.

//funcion para generar un color aleatorio
function colorAleatorio() {
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);

    return `rgb(${a},${b},${c})`;
};

//funcion para cambiarcolor
function cambiaColor (event){
    const nuevoColor = colorAleatorio();
    event.target.style.backgroundColor = nuevoColor;
};

const botones = document.querySelectorAll('.boton');
botones.forEach(boton => {
    boton.addEventListener('click', cambiaColor);
});

//Ej 2-2 Crea un HTML con 5 <div> de 100px por 100px y un botón. Cada vez que pulses el botón, los div deben cambiar de color aleatoriamente.
const botonCajas = document.getElementById('boton_cajas');
const cajas = document.querySelectorAll('.caja');

botonCajas.addEventListener('click', () => {
    cajas.forEach(caja =>{
        caja.style.backgroundColor = colorAleatorio();
    });
});

// Ej 2-3 Crea una web que capture el movimiento del ratón. Cada vez que se mueva, imprime su posición (x, y) en consola.
const movRaton = document.getElementById('raton');

document.addEventListener('mousemove',(e) => {
    movRaton.innerText=`X: ${e.clientX}, Y: ${e.clientY}`;
});

// Ej 2-4 Crea un <div> y cada vez que el ratón entre o salga del div, su color debe cambiar aleatoriamente.
const cajaColor = document.querySelector('.caja__cambiacolor');

cajaColor.addEventListener('mouseover', (e) => {
    cajaColor.style.backgroundColor = colorAleatorio();
});

//Ej 3-1 Elige 3 de los eventos que describiste en el Nivel 1 y crea una web simple que los utilice.
//ej 3.1.1
let cuentaClicks = 0;
    const contador = document.getElementById('contador');
    contador.addEventListener('click', function(){
        cuentaClicks++;
        contador.innerText = cuentaClicks;
    });

//3j 3.1.2
const clickButton = document.getElementById('click-button');
    
    clickButton.addEventListener('click', function() {
        const mensaje = document.getElementById('mensaje-secreto');

        if(mensaje.classList.contains('oculto')){  // comprueba si mensaje tiene la clase css oculto
            mensaje.classList.remove('oculto');
            this.textContent = 'Ocultar mensaje'; // cambiamos el texto del boton a ocultar mensaje
        }else {
            mensaje.classList.add('oculto'); //añade la clase para ocultarlo
            this.textContent = 'Mostrar Mensaje'; //cambiamos el texto del boton
        }
    });

//ej 3.1.3
const textoContador = document.getElementById('texto-contador');
const caracterContador = document.getElementById('caracter-contador');   

textoContador.addEventListener('input', (e) => {
const longitud = e.target.value.length;
caracterContador.textContent = longitud;

    if( longitud > 150 ) {
        caracterContador.style.color = 'red';
    } else if (longitud > 100 ) {
        caracterContador.style.color = 'orange';
    } else {
        caracterContador.style.color= ' yellow';

    };
    
});


// Crea una web donde uses: preventDefault() en un formulario para evitar el envío. stopPropagation() en un div dentro de otro para que no se propague el evento. once para que un botón solo pueda hacer una acción una sola vez.
    const form = document.getElementById('miFormnulario');
    form.addEventListener('submit',(e) => {
        e.preventDefault();    
        console.log('Formulario bloqueado');
    });

    form.addEventListener('sumit',(e) => {
        e.stopPropagation();  
    });


    
    