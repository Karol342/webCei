//1-1 Crea un array de 10 posiciones y muéstralo por consola
let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros)

//1-2 Muestra los elementos de las posiciones 3 y 6.
console.log(numeros[3])
console.log(numeros[6])

//1-3 Muestra por consola el tamaño del array.
console.log(numeros.length)

//1-4 Añade un valor al principio del array y muéstralo.
numeros.unshift(-8)
console.log(numeros)

//1-5 Añade un valor al final del array y muéstralo.
numeros.push(18)
console.log(numeros)

//1-6 Elimina los elementos de la posición 5 y 6 y muestra el array.
numeros.splice(4,2)
console.log(numeros)

//2-1 Elige un elemento y muestra su posición (indexOf).
let posicion = numeros.indexOf(9)
console.log(posicion)


//2-2 Dale la vuelta al array (reverse) y muéstralo.
numeros.reverse()
console.log(numeros)

//2-3 Convierte el array a un string separado por comas y muéstralo.
let fraseNumeros = numeros.join('-')
console.log(fraseNumeros)

//2-4 Separa el string anterior y vuelve a convertirlo en array (split).
let nuevoArray = fraseNumeros.split(' ')
console.log(nuevoArray)

//2-5 Recorre el array con forEach e imprime cada valor y su índice.
numeros.forEach((numero, i) =>{
    console.log(`El numero ${numero} esta en la posicion ${i}`)
})
//2-6 Recorre el array con forEach y añade algo a cada valor antes de imprimirlo.
let array3 = numeros.map(numero => numero + ' es un numero')
console.log(array3)

//3-1 Busca si existe un valor en el array y muéstralo (con includes y find).
let valor = array3.find( numero => numero.includes(3));
console.log(valor)

//3-2 Filtra los valores según una condición (ej: que contengan una letra o sean mayores que X si son números).
let mayorDeDos = numeros.filter( numero => numero > 2);
console.log(mayorDeDos)

// 3-3 Reduce un array de números y muestra la suma (reduce). 
let suma = numeros.reduce((acc,num) => acc + num, 0);
console.log(suma);

// 3-4 Deconstruye un array (ej: const [a, b, c] = array) y muestra cada variable por consola. 
let alumnos = ['Bea', 'Gomez' , 'Full Stack']
let [ nombre , apellido , curso ] = alumnos
console.log(nombre)
console.log(apellido)
console.log(curso)

// Usa map en un array de strings y crea una lista <ul> en HTML con todos los nombres. 
const elementos = alumnos.map(propiedad => {
    const li = document.createElement('li');
    li.textContent = propiedad;
    return li;
});

    const lista = document.getElementById('lista');
    elementos.forEach(el => lista.appendChild(el));

