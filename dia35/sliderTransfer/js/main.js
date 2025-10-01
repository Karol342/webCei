let slideIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);

  document.querySelector(".prev").addEventListener("click", () => {
    plusSlides(-1);
  });

  document.querySelector(".next").addEventListener("click", () => {
    plusSlides(1);
  });
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("my-slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  console.log("Mostrando slide:", slideIndex);
}
