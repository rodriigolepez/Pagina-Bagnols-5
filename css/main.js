/*
const enlaces = document.getElementsByClassName("enlaces")[0];
const caida = document.getElementsByClassName("caida")[0];
const menucaida = document.getElementById("caida")
let abierto = false;


const toggleMenu = () =>{
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.5s ease-in-out";
}


caida.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".enlaces.enlaces2")){
        abierto=true;
    }else{
        abierto=false;
    }
})

window.addEventListener("click", function(e){
    this.console.log(e.target)
    if(abierto){
        if(e.target !== menucaida){
            toggleMenu();
            abierto=false;
        }
    }
})
*/

// Define time
window.slide_time = 5000

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function goToGroup(self){
  window.clearInterval(window.timer);
  var group = self.getAttribute("group");
  var n = null;
  var slides = document.getElementsByClassName("Slides");
  var i = 0;
  while(n == null){
    if(slides[i].getAttribute("group") == group){
      n = i;
    }
    i++;
  }
  currentSlide(n + 1);
}

// Start Timer
window.timer = window.setTimeout(plusSlides, window.slide_time, 1);

// Show Slides Function
function showSlides(n) {
  window.clearInterval(window.timer);
  var i;
  var slides = document.getElementsByClassName("Slides");
  var buttons = document.getElementsByClassName("imgbutton");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  var group = slides[slideIndex-1].getAttribute("group");
  for (i = 0; i < buttons.length; i++) {
      buttons[i].className = buttons[i].className.replace(" active", "");
      if(buttons[i].getAttribute("group") == group){
        buttons[i].className += " active";
      }
  }
  window.timer = window.setTimeout(plusSlides, window.slide_time, 1);
}
