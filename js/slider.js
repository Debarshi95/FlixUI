const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let autoSlideIndex = 0;
showAutoSlides();

function showAutoSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  autoSlideIndex++;
  if (autoSlideIndex > slides.length) {
    autoSlideIndex = 1;
  }
  slides[autoSlideIndex - 1].style.display = "block";
  setTimeout(showAutoSlides, 3000);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

prevBtn.addEventListener("click", function () {
  plusSlides(-1);
});
nextBtn.addEventListener("click", function () {
  plusSlides(1);
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-manual");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
