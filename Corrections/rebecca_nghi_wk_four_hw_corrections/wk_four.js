let slides = document.querySelectorAll(".container .content-images")

let currentSlide = 0;
const buttonleft = document.querySelector(".left");
const buttonright = document.querySelector(".right");

function nextSlide () {
    slides[currentSlide].className = ".content-images";
    currentSlide = (currentSlide + 1 ) % slides.length;
    slides [currentSlide].className = "slide showing"
}

function prevSlide (){
    slides[currentSlide].className = ".content-images";
    currentSlide = (currentSlide - 1) % "slide showing";
}


if (currentSlide === -1) {
    currentSlide = slide.length - 1;
}

slides [currentSlide].className = "slide showing"

button .addEventListener("change", () =>{});
button .addEventListener("change", () =>{});
