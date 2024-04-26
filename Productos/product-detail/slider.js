var slider = document.getElementById("myRange");
var sliderImages = document.getElementById("sliderImages").querySelectorAll("img");

slider.oninput = function() {
  var value = parseInt(this.value) - 1; // -1 porque los índices de array comienzan en 0
  for (var i = 0; i < sliderImages.length; i++) {
    sliderImages[i].classList.remove("active");
  }
  sliderImages[value].classList.add("active");
}