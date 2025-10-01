document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll('.img');
    const total = imagenes.length;
    const angulo = 360 / total;
    const radio = 350;

    // Posicionar imágenes en círculo
    imagenes.forEach((img, i) => {
        img.style.transform = `rotateY(${i * angulo}deg) translateZ(${radio}px)`;
    });

    // Rotar cada imagen individualmente
    let rotacion = 0;
    setInterval(() => {
        rotacion += 1; // velocidad
        imagenes.forEach((img, i) => {
            img.style.transform = `rotateY(${i * angulo + rotacion}deg) translateZ(${radio}px)`;
        });
    }, 30); // intervalo suave
});