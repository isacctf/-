let janelamodal = document.querySelector("#janelamodal");
let criadoras = document.querySelector("#criadoras");
let span = document.querySelectorAll('.close')[0];

criadoras.addEventListener("click", function(e) {
  e.preventDefault();
  janelamodal.style.display = "block";
});
span.addEventListener("click", function(e){
  janelamodal.style.display = "none";
});
window.addEventListener("click", function(e) {
  if (event.target == janelamodal) {
    janelamodal.style.display = "none";
  }
});
