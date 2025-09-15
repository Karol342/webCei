//Ej 1  if
let a = -8;
let result = 'Menor a 0';

if(a > 0) {
    result = 'Mayor a 0';
}

console.log(result);

//Ej 1-2 else
const mayorEdad = 6;
if(mayorEdad >= 18){
    console.log("Es mayor de edad");
}else {
    console.log("Es menor de edad");
}

//Ej 1-3 Else if
let x = 70;

if (x > 65) {
    console.log("Es mayor a 65");
}else if (x < 18 ) {
    console.log("Es menor de 18");
}else {
    console.log("es de mediana eda");
}

//Ej 2-1
const mascota = "perro";

switch (mascota) {
    case "perro":
        console.log("Tengo un perro");
        break;
    case "gato":
        console.log("Tengo un gato");
        break;
    case "loro":
        console.log("Tengo un loro");
        break;
    default:
        console.log("No tengo mascota");
        break;
}

//Ej 2-2 For

let str = '';
for (let i = 0; i < 9; i++) {
    str = str + i;
}

console.log(str);

//Ej 2-3 While
let n = 0;
while (n < 3){
    n ++;
}

console.log(n);

//Ej 2-3 Do...while
let resultado  ='';
let i = 0;

do {
    i = i + 1;
    resultado++;
} while ( i < 5);

console.log(resultado);

// Ej 3-1 forEach
const letras = ['a','b','c'];

letras.forEach(letra => { 
    console.log(letra)
});

