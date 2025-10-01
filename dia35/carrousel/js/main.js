const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

//Cuando Click en punto
    //Saber la posicion de ese punto
    //Aplicar un transform translateX al grande
    //Quitar la clase activo de TODOS puntos
    //Añadir la clase activo al punto que hemos hecho CLICK

punto.forEach(( cadaPunto , i) => {
    punto[i].addEventListener('click',()=>{

        let posicion = i;
        // posicion es 0 transformX es 0
        //posicion es 1 transformX es -50%
        //operacion = posicion * -50
        let operacion = posicion * -33.33;
        grande.style.transform=`translateX(${operacion}%)`

        punto.forEach((cadaPunto, i) =>{
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');
    })
})