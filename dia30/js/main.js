let win;

document.getElementById("abrir").onclick = () => {
    win = window.open("","", "width=400, height=400");
}

document.getElementById("cerrar").onclick = () => {
    if(win){
        win.close();
    }
}
document.getElementById("mover").onclick = () => {
    if(win){
        win.moveTo(200,200);
    }
}

document.getElementById("redimensionar").onclick = () => {
    if(win){
    win.resizeTo(600,300);
    }
}

document.getElementById("abrirGoogle").onclick = () => {
    win.location.href = "https://www.google.com/";
}


//Ej 2

const boton = document.getElementById("cambiarNumero");
boton.addEventListener('click', () => {
const numeros = document.querySelectorAll(".numeros");

numeros.forEach(numero => {
        let numeroNuevo = Math.floor(Math.random()*100);
        numero.textContent = numeroNuevo;
    });
});

// EJ 3
// Realiza una calculadora. Debe tener:
// Dos <input type="number">
// Un <select> con los operadores: +, -, *, /
// Un botón para calcular. 
// Al pulsar el botón, debe mostrar el resultado de la operación seleccionada.

const form = document.querySelector('#calculadora');
const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2');
const r = document.querySelector('#resultado');
const operador = document.querySelector('#operacion');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const n1 = parseFloat(numero1.value);
    const n2 = parseFloat(numero2.value);
    let resultado;
    switch(operacion.value) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "/":
            resultado = n1 / n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        default:
            resultado = "operación no valida";
    }
    console.log(resultado)
    r.innerText = resultado;
    form.reset();
});


// Ejercicios con querySelectorAll():
// Selecciona todos los <div> de una página y cámbiales el color.

const divs= document.querySelectorAll('div');
    divs.forEach(div => {
        div.style.background ="purple";
    });

//document.querySelectorAll("div").forEach(div) => div.style.bacground = "purple";

// Selecciona todos los <p> y añade texto adicional.
const pes = document.querySelectorAll('p');
    pes.forEach( p=> {
        p.innerHTML = "Esto es muy duro";
    });

// Selecciona todos los botones y añade un evento que cambie su texto al hacer clic.

const botones = document.querySelectorAll('button');
    botones.forEach(boton => {
        boton.addEventListener('click', ()=> {
            boton.textContent = "Click";
        })
    })

