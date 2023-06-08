var bouton = document.getElementById("bouton-langues");
var listeLangues = document.getElementById("liste-langues");
var fleche = document.getElementById("fleche");

var main= document.querySelector("main")
var info = document.createElement("p");
info.innerText="Description";

bouton.addEventListener("click", function() {
  listeLangues.style.display = (listeLangues.style.display === "block") ? "none" : "block";
  fleche.classList.toggle("fleche-bas");
});

var button = document.getElementById("btn2");
button.addEventListener("click", function() { 
    console.log("ok!")
    main.appendChild(info)
});
