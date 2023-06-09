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

    // Fonction pour envoyer l'e-mail de confirmation
    function envoyerEmail() {
      Email.send({
        Host: "john.doe@seetickets.fr",
        Username: "username@yourisp.com",
        Password: "password",
        To: "client@example.com",
        From: "doe@seetickets.fr",
        Subject: "Confirmation de commande",
        Body: "Votre commande a été passée avec succès !",
      }).then(function (message) {
        alert("E-mail de confirmation envoyé !");
      });
    }

    // Appel de la fonction pour envoyer l'e-mail au chargement de la page
    window.onload = function () {
      envoyerEmail();
    };
  

