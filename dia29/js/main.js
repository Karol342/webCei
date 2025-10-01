// Crea una función que muestra por consola todos los números pares entre el 1 y el 100. 

// function pares() {
//     for (let i= 0; i<=100; i++){
//         if(i%2 === 0) {
//             console.log(i);
//         }
//     }
// }
// pares();

// // Crea una función que dibuje un cuadrado de 5x5 con “*” en la consola. 

// function cuadrado() {
//     for(let i =1 ; i<=5; i++){
//         let text = "";
//         for(let j=1; j<=5 ; j++){
//             text += "##";
//         }
//         console.log(text);
//     }
// }
// cuadrado();

// // Crea una función que dibuje un cuadrado hueco de 5x5 con “*” en la consola. 

// function cuadradoHueco() {
//     for(let i = 1 ; i <= 5; i++){
//         let text = "";
//         for(let j = 1; j <= 5 ; j++){
//             if( i===1 || i===5 || j===1 || j===5){
//                 text +="**";
//             }else {
//                 text += " ";
//             }
//         }
//         console.log(text);
//     }
// }
// cuadradoHueco();



//Haz que las 3 funciones anteriores (pares, cuadrado lleno, cuadrado hueco) reciban los números por parámetro.Por ejemplo: mostrarPares(inicio, fin) o dibujarCuadrado(tamaño).

// function pares(inicio, fin) {
//     for (let i= inicio; i<=fin; i++){
//         if(i%2 === 0) {
//             console.log(i);
//         }
//     }
// }
// pares(500,550);

// function cuadrado(t){
//     for(let i =1 ; i<=t; i++){
//         let text = "";
//         for(let j=1; j<=t ; j++){
//             text += "##";
//         }
//         console.log(text);
//     }
// }
// cuadrado(10);

// function cuadradoHueco(t) {
//     for(let i = 1 ; i <= t; i++){
//         let text = "";
//         for(let j = 1; j <= t ; j++){
//             if( i===1 || i===t || j===1 || j===t){
//                 text +="**";
//             }else {
//                 text += " ";
//             }
//         }
//         console.log(text);
//     }
// }
// cuadradoHueco(7);

// Crea una función “saludar” que muestre un alert con un nombre recibido como argumento.Crea otra función procesarEntradaUsuario que pida el nombre con prompt y pase el resultado a saludar.

// console.log("\nEjercicio 2-2");

// function saludar(nombre){
//     alert(`Hola ${nombre}`)
// }

// function despedir(nombre){
//     alert(`Adios, ${nombre}`)
// }

// function procesarEntradaUsuario(callback){
//     let nombre = prompt ("Cual es su nombre?");
//     callback(nombre);
// }

// procesarEntradaUsuario(saludar)
// procesarEntradaUsuario(despedir)

// Usa setTimeout() para mostrar un mensaje en la consola 3 segundos después de cargar la página. 

// setTimeout(() => {
//     console.log("Han pasado 3 segundos");
// }, 3000)

// setInterval(() =>{
//     const now = new Date;
//     console.log(now.toISOString())
// }, 1000)


const contador = document.getElementById("contador")
let i = 0;
let intervalo;

intervalo = setInterval(() =>{
    contador.innerText = i++;
    if(i === 10){
        clearInterval(intervalo)
    }
}, 100)



