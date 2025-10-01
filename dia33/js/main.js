//Crea una página con un div y un botón. Al pulsar el botón, añade una clase CSS al div que aplique una animación sencilla (por ejemplo, cambio de color o rotación).
const divUno = document.querySelector('.divUno');
const botonUno = document.querySelector('.botonUno');

botonUno.addEventListener('click', () => {
    divUno.classList.add('animacion');
});

//Crea una página con un párrafo (<p>) que tenga una clase aplicada. Al pulsar un botón, elimina esa clase y cambia el color del texto.

const parrafo = document.querySelector('.parrafo');
const botonDos = document.querySelector('.botonDos');

botonDos.addEventListener('click', () => {
    parrafo.classList.remove('parrafo');
    parrafo.classList.add('desvanecimiento');
});

//Crea una página con un div con bordes. Al pulsar un botón, alterna una clase que cambie el tamaño del div (por ejemplo, de 100px a 200px).

const divDos = document.querySelector('.divDos');
const botonTres = document.querySelector('.botonTres');

botonTres.addEventListener('click', () => {
    divDos.classList.toggle('aumentar');
});

//Añade un botón que, al pulsar, cree un nuevo div de 100x100px con un color aleatorio y lo añada a la página. Muestra un número incremental dentro del div. Aplica float: left en CSS.

const botonCuatro = document.querySelector('.botonCuatro');
const divTres = document.querySelector('.divTres');
let contador = 0;

function colorAleatorio (){
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    
    return `rgb(${a},${b},${c})`;
}

function numerar() {
    const cajas = document.querySelectorAll('.caja');
    let num = 1;
    cajas.forEach((caja) => {
        caja.textContent = num++;
    });
}
botonCuatro.addEventListener('click', () => {
    contador++;

        let div = document.createElement('div');
        div.classList.add('caja');
        div.style.backgroundColor = colorAleatorio();

        div.innerHTML = contador;

        div.addEventListener('click' , (e) => {
            e.target.remove();
            numerar();
        });
        divTres.appendChild(div);
        numerar();

});

//A los ejercicios anteriores, añade una transición CSS para que el cambio de clases y animaciones sea suave (por ejemplo, transición en las propiedades afectadas).

divUno.classList.add('transicion');
parrafo.classList.add('transicion');
divDos.classList.add('transicion');

//En el ejercicio de añadir divs, haz que al pulsar cualquiera de los divs creados se elimine ese div de la página. Añade cursor: pointer para que el usuario vea que es interactivo.

//Crea una animación CSS más compleja para la clase que se añade al div del primer ejercicio (por ejemplo, una animación que lo haga girar, crecer y cambiar opacidad).

//Al eliminar la clase del párrafo, haz que el cambio de color incluya una animación suave con transition y que la eliminación de clase también desencadene un efecto (como desvanecimiento).

//Crea una página con un div con bordes. Al pulsar un botón, alterna una clase que cambie el tamaño del div (por ejemplo, de 100px a 200px).

//Mejora el sistema de creación y eliminación de divs para que el número incremental se mantenga correcto y que cada nuevo div tenga una animación al aparecer y desaparecer.