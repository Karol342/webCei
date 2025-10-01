const grande = document.getElementById('carrusel3d');
const puntos = document.querySelectorAll('.punto');
const imagenes = document.querySelectorAll('.img');

let index = 0;
const total = imagenes.length;
const angle = 360 / total;

// Posicionar imágenes en círculo
imagenes.forEach((img, i) => {
    img.style.transform = `rotateY(${i * angle}deg) translateZ(250px)`;
});

// Mostrar slide por índice
function showSlide(i) {
    index = (i + total) % total; // Permite rotación infinita circular
    const rotacion = -index * angle;
    grande.style.transform = `rotateY(${rotacion}deg)`;

    puntos.forEach(p => p.classList.remove('activo'));
    puntos[index].classList.add('activo');
}

// Clic en puntos
puntos.forEach((punto, i) => {
    punto.addEventListener('click', () => {
        showSlide(i);
    });
});

// Auto-rotación cada 3 segundos (opcional)
setInterval(() => {
    showSlide(index + 1);
}, 3000);

// Mostrar el primer slide al iniciar
showSlide(index);


