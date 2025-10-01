// Lightbox
function open_img(url){
    document.querySelector('#lightbox img').src = url;
    document.querySelector('#lightbox').classList.add("active");
}

function close_img(){
    document.querySelector('#lightbox').classList.remove('active');
}

//  localStorage
const STORAGE_KEY = 'menuSeleccionado'; //definimos la constante para guardar o leer datos
const titulo = document.getElementById('titulo');
const botones = document.querySelectorAll('.nav__link, .desplegable__item');

function seleccionar(nombre, el) {
     //cambia el texto del titulo por el nombre de la opcion seleccionada
    if (titulo) titulo.textContent = nombre;
     //busca los enlaces que tengan la clase active y se la quita
    document.querySelectorAll('.nav__link.active, .desplegable__item.active')
    .forEach(a => a.classList.remove('active'));
    //añade la clase active al elemento que acaba de seleccioanr
    if (el) el.classList.add('active');
    //Guarda el nombre de la opcion en localStorage para recordarlo
    localStorage.setItem(STORAGE_KEY, nombre);
}


//Cuando la pagina carga, lee el valor guardado en localStorage
window.addEventListener('DOMContentLoaded', () => {
    const guardado = localStorage.getItem(STORAGE_KEY);
    if (guardado) {
    let match = Array.from(botones).find(a => {
        const n = a.dataset.name || a.textContent.trim();
        return n.toLowerCase() === guardado.toLowerCase();
    });
    seleccionar(guardado, match || null);
}
});

botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        // Evita que el # cambie la URL
        e.preventDefault(); 
        const nombre = boton.dataset.name || boton.textContent.trim();
        seleccionar(nombre, boton);
    });
});

//Intersection observer

const imagenes = document.querySelectorAll('.galeria img');

//creamos el observer
const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        //Si la imagen es visible
        if(entrada.isIntersecting) {
            const img = entrada.target;
            //cargar imagen
            img.src = img.dataset.src;
            //dejar de cargar imagen
            observer.unobserve(img);
        }
    });
});

//observar cada imagen
imagenes.forEach(img => observer.observe(img));

//Aria-Expanded y Aria-Hidden

const toggleBtn = document.getElementById('toggleBtn');
const galeriaContainer = document.getElementById('galeriaContainer');

toggleBtn.addEventListener('click', () => {
    //vemos como está ahora
    const estaExpandido = toggleBtn.getAttribute('aria-expanded')==='true';

    //cambiamos el estado
    toggleBtn.setAttribute('aria-expanded',!estaExpandido);
    galeriaContainer.setAttribute('aria-hidden', estaExpandido);

    //cambiamos texto del boton
    toggleBtn.textContent = estaExpandido? 'Mostrar Galeria': 'Ocultar Galeria';
});