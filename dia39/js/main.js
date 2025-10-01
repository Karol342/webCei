
async function cargar(archivo) {
    const res = await fetch(archivo);
    const texto = await res.text();
    const div = document.getElementById('contenido');
    div.classList.remove('mostrar'); // reinicia animación
    div.innerHTML = texto;
    setTimeout(() => div.classList.add('mostrar'), 50);