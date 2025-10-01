// Crea una lista (ul) con 5 elementos (li) en HTML.Luego, usando forEach desde JavaScript, cambia el color de fondo de cada uno.
const elementos = document.querySelectorAll('.elemento');
elementos.forEach((elemento => {
    elemento.style.background = 'darkred';
}));
// Crea varios párrafos en HTML.Utiliza forEach para añadir un emoji al final del texto de cada uno.
const pes = document.querySelectorAll('.parrafo');
pes.forEach((p => {
    p.textContent += " ;)";
}));
// Selecciona todos los botones de una página y cambia su texto usando forEach.
const botones = document.querySelectorAll('.boton');
botones.forEach((boton => {
    boton.textContent = "Nuevo texto";
}));

// Crea una lista de tareas (ul) con varios li.Usa forEach para añadir un evento click a cada ítem que lo tache al hacer clic.
const tareas = document.querySelectorAll('.tareas');
tareas.forEach((tarea) => {
    tarea.addEventListener('click', () => {
        if(tarea.style.textDecoration === "line-through") {
            tarea.style.textDecoration = "none";
        }else {
            tarea.style.textDecoration = "line-through";
        }
    });
});
// Crea varias tarjetas (div) con información de productos (nombre, precio).Usa forEach para recorrerlas y aplicar estilos condicionales si el precio supera cierto valor.

const tarjetas = document.querySelectorAll('.tarjetas');
tarjetas.forEach((tarjeta) =>{
    const precio = parseFloat(tarjeta.querySelector('.precio').innerText)
    if(precio <= 50) {
        tarjeta.style.background = 'green';
    }
})
// Usa forEach para añadir un botón "Eliminar" a cada bloque de contenido.Al pulsar el botón, el bloque se elimina del DOM.

const eliminar = document.querySelectorAll('.tarjetas');
tarjetas.forEach((tarjeta) =>{
    const boton = document.createElement('button');
    boton.textContent = 'X';
    boton.classList.add('eliminar');

    boton.addEventListener('click', () => {
        tarjeta.remove();
    });

    tarjeta.appendChild(boton);
});

// A partir de un array de objetos (nombre, edad), genera dinámicamente un listado en el DOM.Usa forEach para recorrer el array y crear nodos HTML para mostrar los datos. 

const personas = [
    {nombre: "Ana", edad:"28"},
    {nombre: "Luis", edad:"37"},
    {nombre: "Carlos", edad:"40"}
];

const ul = document.getElementById("lista");

personas.forEach( persona => {
    const li = document.createElement("li");
    li.textContent = persona.nombre + " " + persona.edad;
    ul.appendChild(li);

});


// Crea una galería de imágenes desde un array de URLs.Usa forEach para añadirlas al DOM dentro de una cuadrícula.
const imagenes = [
    "https://picsum.photos/id/1025/300/200",
    "https://picsum.photos/id/1035/300/200",
    "https://picsum.photos/id/1045/300/200",
    "https://picsum.photos/id/1015/300/200"
];

const galeria = document.querySelector('.galeria');

imagenes.forEach(imagen => {
    const img = document.createElement("img");
    img.src = imagen;
    galeria.appendChild(img);
});
// Crea una tabla a partir de un array de objetos (nombre, email, rol).Usa forEach para crear cada fila (tr) y cada celda (td) dinámicamente.

const alumnos = [
    {nombre: "Raquel ", email: " asd@gmail.com" , rol: " estudiante"},
    {nombre: "Pablo ", email: " asd@gmail.com" , rol: " estudiante"},
    {nombre: "Leire ", email: " asd@gmail.com" , rol: " profesora"}
];

const tabla = document.querySelector('.tabla');

alumnos.forEach(alumno => {
    const fila = document.createElement("tr");
    const nombre = document.createElement("td");
    const email = document.createElement("td");
    const rol = document.createElement("td");

    nombre.textContent = alumno.nombre;
    email.textContent = alumno.email;
    rol.textContent = alumno.rol;

    fila.appendChild(nombre);
    fila.appendChild(email);
    fila.appendChild(rol);
    
    tabla.appendChild(fila);
});