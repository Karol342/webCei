//tabs

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab, iCurrent) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab, i) => {
            tab.classList.toggle('active', i === iCurrent);
        });
        contents.forEach((c, i) => {
            c.classList.toggle('active', i === iCurrent);
        });
    });
});


//numero

const inputNumber = document.querySelector('#number');
const botonCheck = document.querySelector('#check');
const mensaje = document.querySelector('#span');

botonCheck.addEventListener('click', () => {
    const userNumber = parseInt(inputNumber.value);
    if (!userNumber) {
        mensaje.textContent = "Introduce un numero del 1 al 9";
        return;
    }

    const randomNumber = Math.floor(Math.random() * 9) + 1;

    if (userNumber === randomNumber) {
        mensaje.textContent = `Has acertado!! el numero era ${randomNumber}`;
    } else {
        mensaje.textContent = `Ohhhh lo siento, el numero era ${randomNumber}`;
    }
})
const toastify = document.querySelector('#toastify');

toastify.addEventListener('click', () => {
    Toastify({
        text: "This is a toast",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();

})




