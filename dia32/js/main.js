// Nivel 1
// Crea una página con un <p> y un botón. Cuando se pulse el botón, el color del texto y el fondo deben alternar entre blanco y negro.
const parrafo = document.querySelector('.parrafo');
const boton = document.querySelector('.boton');

boton.addEventListener('click', () => {
    if(parrafo.style.color !="white"){
        parrafo.style.backgroundColor = "black";
        parrafo.style.color="white";
    }else{
        parrafo.style.backgroundColor = "white";
        parrafo.style.color="black";
    }
});

// Crea una página con un <div> con bordes y un botón. Al pulsarlo, el ancho del <div> debe alternar entre 20vw y 80vw.
const div = document.querySelector('.alternar');
const botonAlt = document.querySelector('.botonAlt');

botonAlt.addEventListener('click', () => {
    if(div.style.width != '80vw'){
        div.style.width = '80vw';
    } else {
        div.style.width = '20vw';
    }
})

// A los dos ejercicios anteriores, añade una transición para que el cambio sea suave. (css)

// Nivel 2
// Crea una página con un <div> cuadrado y un botón. Al pulsar el botón, el <div> debe alternar entre (por ejemplo, rotar y escalar).
const cuadrado = document.querySelector('.cuadrado');
const botonRotar = document.querySelector('.botonRotar');

botonRotar.addEventListener('click', () => {
    if(cuadrado.style.transform != "rotate(60deg) scale(1.5)") {
        cuadrado.style.transform = "rotate(60deg) scale(1.5)";
    } else {
        cuadrado.style.transform = "rotate(0deg) scale(1)";
    }
})

// Crea una página con un <div> con bordes y un botón. Al pulsar el botón, el <div> debe alternar su propiedad display entre none y block.
const none = document.querySelector('.none');
const botoNone = document.querySelector('.botoNone');

botoNone.addEventListener('click', () =>{
    if(none.style.display !== 'none') {
        none.style.display = 'none';
    } else {
        none.style.display = 'block';
    }
})
// Crea una página con un <div> con color de fondo y un botón. Al pulsar el botón, debe alternar la opacidad del texto entre 0 y 1. 
const fondo = document.querySelector('.fondo');
const botonFondo = document.querySelector('.botonFondo');

botonFondo.addEventListener('click', () => {
    if(fondo.style.opacity !== '0'){
        fondo.style.opacity = '0';
    } else {
        fondo.style.opacity= '1';
    }
});


// Nivel 3: Manipulación dinámica del DOM
// Crea una página con una con celdas numeradas y un botón. Al pulsar el botón, una celda aleatoria debe cambiar de color.
const celdas = document.querySelectorAll("td");
const botonCambiar = document.querySelector('.cambiar');

botonCambiar.addEventListener('click', () => {

const aleatorio = Math.floor(Math.random() * celdas.length);

celdas.forEach(celda => 
    celda.style.backgroundColor = "");
    
    celdas[aleatorio].style.backgroundColor = "black";
});
 


// Crea una página con un <div> con bordes y un botón. Al pulsar el botón, el <div> debe moverse a una dentro de la pantalla.
const aleatorio = document.querySelector('.aleatorio');
const mover = document.querySelector('.mover');

mover.addEventListener('click', () => {
    const posicionX = Math.random()*(window.innerWidth - 150);
    const posicionY = Math.random()*(window.innerHeight - 150);

    aleatorio.style.left = posicionX + 'px';
    aleatorio.style.top = posicionY + 'px';
});
