Parcours de vente rapide

Présentation
L’objectif de ce projet est de mettre à disposition des clients (utilisateurs) de nos clients
(organisateurs), type lieu de visite comme le Château de Versailles ou la Cité des Sciences,
une web application d'achat rapide de billets pour accéder en quelques minutes à une
exposition spécifique en flashant un QR code (approche en mobile first).
Un utilisateur arrivant devant un musée, concert, ou autre événement sans ticket doit
pouvoir l’acheter rapidement avec son smartphone. Pour cela il pourra suivre les étapes
suivantes :

- Scanner le QR Code qui le dirige vers la web application (avec le bon canal de vente
  présélectionné)
- Choisir le produit (évènement), horaires (la représentation) et tarifs souhaités
- Renseigner ses coordonnées (a minima le mail pour le suivi)
- Télécharger ses billets pour passer le contrôle d’accès

Maquettes
Vous trouverez ci-dessous le lien vers une idée de ce à quoi devrait ressembler le parcours de
vente.

https://www.figma.com/proto/jYHySWZNlHAqBilZViY1Ej/Projet-PVR-(Hackathon)?page-
id=1350%3A5782&type=design&node-id=1350-9042&viewport=-

239%2C476%2C0.61&scaling=min-zoom

Single page
La navigation se fait de haut en bas avec des widgets qui s’ouvre à chaque étape.
Le retour à l’étape précédente est possible en conservant les données déjà remplies

Bonus
Le design pourra être responsive avec un mode Desktop

2

API
Pour récupérer les produits, effectuer la vente et télécharger les billets, vous vous appuierez
sur des API.
Documentation
https://front.apirecette.digitick-ppe.com/v1.1/doc/index.html

Sandbox
http://sandbox.apirecette.digitick-ppe.com

Connexion
Pour se connecter, il faut utiliser le mode OAuth avec le « Recette server » et les paramètres
suivant :

- Client ID : apidigicsi
- Client Secret : R89x2seXL
  Les requêtes utiliseront les paramètres fixes suivant :
- salesChannelId : 13357
- userTypeId : 64
  Les paramètres ci-dessus devront être paramétrable et pourront être récupéré par une
  future API.
  Les autres données nécessaires pour les routes utiles pourront-être vide ou récupérée par
  une précédente requête.
