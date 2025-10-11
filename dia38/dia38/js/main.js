let buttons = document.querySelectorAll("button");
let container = document.querySelector("#container");

function handlerClickButton(e) {
    container.classList.add("fade-in");
    fetch(e.target.dataset.page)
        .then(data => data.text())
        .then(text =>
            setTimeout(() => {
                container.innerHTML = text;
                container.classList.remove("fade-in");
            }, 500)
        )
}

buttons.forEach(button => {
    button.addEventListener('click', handlerClickButton)
});

//api publica, clima

// const API_KEY = "15370983d22ae342c5160fda1601de76";

// const formCiudad = document.getElementById("formCiudad");
// const cityInput = document.getElementById("city");
// const result = document.getElementById("result");

// formCiudad.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const city = cityInput.value.trim();
//     if (!city) return;

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;

//     try {
//         const res = await fetch(url);
//         if (!res.ok) throw new Error("Ciudad no encontrada");
//         const data = await res.json();
//         const temp = Math.round(data.main.temp);
//         const desc = data.weather[0].description;
//         const icon = data.weather[0].icon;

//         result.innerHTML = `
//             <p><strong>${data.name}</strong></p>
//             <p>${temp}°C - ${desc}</p>
//             <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Icono clima">
//             `;

//     } catch (err) {
//         result.innerHTML = `<p style="color:red;">${err.message}</p>`;
//     }
// });

//Peliculas
const API_KEY = "371c227cac606439510420110a21befd";
let form = document.querySelector('.form');
let search = document.querySelector('#pelicula');
let div = document.querySelector('.resultado');


function clickButton(e) {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=es-ES&query=${search.value}`, {
        method: "GET",
        headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGQ0NmM1M2RiMjIzMDY0YmUzY2I5MzUwM2NmZWFlMiIsIm5iZiI6MTc1OTMzNjM4Ny40MTYsInN1YiI6IjY4ZGQ1N2MzMTMyMTAyZjJiMWM3NzQxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X4oRTySLl-yaoA5kohCflvGYNtddu_t3bc2vVyCOHYk' }
    })

        .then(data => data.json())
        .then(json => {
            let html = "";

            json.results.forEach(item => {
                html += `<div class="item">`;
                html += `<h4>${item.original_title} (${item.release_date})</h4>`;
                html += `<img src="https://image.tmdb.org/t/p/w500/${item.backdrop_path}">`;
                html += `<p>${item.overview}</p>`;
                html += `</div>`;
            });

            div.innerHTML = html;
        })
}
form.addEventListener("submit", clickButton)
