//* Creation d'un utilisateur

const createUser = document.querySelector("#createUser");

createUser.addEventListener("click", () => {
  const data = {
    firstName: null,
    lastName: null,
    civility: "mr",
    login: null,
    cellPhoneNumber: null,
    fixedPhoneNumber: null,
    email: "alex@gmail.com",
    password: null,
    address: null,
    additionalAddress: null,
    zipcode: null,
    city: null,
    countryId: 1,
    birthDate: null,
    isInvitedAccount: false,
    facebookUserId: null,
    creationSalesChannelId: 13357,
    userTypeId: 64,
    optins: {
      distributor: false,
      partner: false,
      promoter: false,
    },
  };

  const url = "https://front.apirecette.digitick-ppe.com/v1.1/user/users";

  const headers = {
    Authorization: "Bearer a195afc8aefc31aead95a2a2bbca102a34e57fce",
    "Content-Type": "application/json",
  };
  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const evenements = document.querySelector("#evenements");
  const url =
    "https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/calendar/day/2023-06-10?lang=fr";

  const headers = {
    Authorization: "Bearer a195afc8aefc31aead95a2a2bbca102a34e57fce",
  };
  fetch(url, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 1; i++) {
        const event = data._embedded.hours[i];
        console.log(event);
        const dateString = "2023-06-10 16:00:00";
        const date = new Date(dateString);
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        const formattedDate = date.toLocaleDateString("fr-FR", options);
        const parts = formattedDate.split(" ");
        const day = parts[0].charAt(0).toUpperCase() + parts[0].slice(1, 3).toLowerCase();
        const month = parts[2].charAt(0).toUpperCase() + parts[2].slice(1, 4).toLowerCase();
        const finalFormattedDate = day + " " + parts[1] + " " + month + " " + parts[3];
        const html = `
          <article class="event" id="${event.eventId}">
            <img class="event-img" src="./img/event-img-template.PNG" alt=""></img>
            <div class="event-infos">
              <h2 class="event-name">${event.eventName}</h2>
              <span class="event-date">${finalFormattedDate} - ${event.dateStart
          .slice(11)
          .slice(0, -3)}</span>
            </div>
            <div class="formulaire">
              <span class="event-date">${finalFormattedDate} - ${event.dateStart
          .slice(11)
          .slice(0, -3)}</span> 
              <div id="places-dispo" class="places">
              </div>
            </div>
          </article>
        `;
        evenements.innerHTML += html;
      }
      const articles = document.querySelectorAll(".event");
      articles.forEach((article) => {
        article.addEventListener("click", () => {
          article.classList.add("show");
        });
      });

      const incrementPlace = document.querySelectorAll(".incrementPlace");
      incrementPlace.forEach((button) => {
        button.addEventListener("click", () => {
          const compteur = document.querySelector("compteur");
        });
      });
    });
});

// * Deuxieme fetch

const fetch2 = document.querySelector("#fetch2");

fetch2.addEventListener("click", () => {
  const url =
    "https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/shows/9210959/prices?limit=100&offset=0&lang=fr";

  const headers = {
    Authorization: "Bearer a195afc8aefc31aead95a2a2bbca102a34e57fce",
  };
  fetch(url, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data._embedded.prices);
    });
});

//* Troisieme fetch

const fetch3 = document.querySelector("#fetch3");

fetch3.addEventListener("click", () => {
  const data = {
    salesChannelId: 13357,
    expirationDelay: 30,
  };

  const url = "https://front.apirecette.digitick-ppe.com/v1.1/order/carts";

  const headers = {
    Authorization: "Bearer a195afc8aefc31aead95a2a2bbca102a34e57fce",
    "Content-Type": "application/json",
  };
  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      alert(`Panier crée, id ${responseData.cartId}:`);
    });
});

//* Quatrieme fetch

const fetch4 = document.querySelector("#fetch4");

fetch4.addEventListener("click", () => {
  const data = {
    showId: 9210959,
    entries: [
      {
        priceId: 2868423,
        accessCode: "",
        nbSeats: 1,
        membershipTicketId: null,
      },
    ],
  };

  const url =
    "https://front.apirecette.digitick-ppe.com/v1.1/order/carts/288019415/entries/createByPrices";

  const headers = {
    Authorization: "Bearer a195afc8aefc31aead95a2a2bbca102a34e57fce",
    "Content-Type": "application/json",
  };
  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData._embedded.entries[0]);
    });
});

//* Quinquieme fetch

const fetch5 = document.querySelector("#fetch5");

fetch5.addEventListener("click", () => {
  const url =
    "https://front.apirecette.digitick-ppe.com/v1.1/order/carts/288019415/salesChannels/13357/check?userId=77204063";

  const headers = {
    Authorization: "Bearer a195afc8aefc31aead95a2a2bbca102a34e57fce",
    "Content-Type": "application/json",
  };

  fetch(url, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});

//* Afficher le panier

const showPanier = document.querySelector("#showPanier");

showPanier.addEventListener("click", () => {
  const url = "https://front.apirecette.digitick-ppe.com/v1.1/order/carts/288019415";

  const headers = {
    Authorization: "Bearer a195afc8aefc31aead95a2a2bbca102a34e57fce",
    "Content-Type": "application/json",
  };

  fetch(url, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});

//* Sixieme fetch

const fetch6 = document.querySelector("#fetch6");

fetch6.addEventListener("click", () => {
  const data = {
    userId: 77204064,
    deliveryModeId: 1,
    supportTypeId: 1,
    address: {
      label: "Digitick - jacques",
      companyName: "Digitick",
      name: "Lantin",
      firstname: "Jacques",
      address: "35 Quai du Lazaret",
      additional: null,
      additional2: null,
      additional3: null,
      postOfficeBox: null,
      city: "Marseille",
      zipCode: 13002,
      cedex: null,
      cedexNum: null,
      civilityId: 1,
      countryFormatId: 1,
    },
    paymentMethod: [
      {
        id: 1,
        montantCents: 1200,
      },
    ],
    refBank: "4564g65-fDXGHSD45",
    deviceId: null,
    salerId: null,
  };

  const url =
    "https://front.apirecette.digitick-ppe.com/v1.1/order/transactions/carts/288019415/createOrderFromCart";

  const headers = {
    Authorization: "Bearer a195afc8aefc31aead95a2a2bbca102a34e57fce",
    "Content-Type": "application/json",
  };
  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
    });
});

//* Recevoir PDF

const getPDF = document.querySelector("#fetch7");

getPDF.addEventListener("click", () => {
  const url =
    "https://front.apirecette.digitick-ppe.com/v1.1/order/transactions/159760461/readTicketListPDF";

  const headers = {
    Authorization: "Bearer a195afc8aefc31aead95a2a2bbca102a34e57fce",
    "Content-Type": "application/json",
  };

  fetch(url, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});

//* Prix dispo

const prixDispo = document.querySelector("#prixDispo");

prixDispo.addEventListener("click", () => {
  const url =
    "https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/shows/9210959/readPricesAvailability?lang=fr";

  const url2 =
    "https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/shows/9210959/prices?limit=100&offset=0&lang=fr";

  const headers = {
    Authorization: "Bearer a195afc8aefc31aead95a2a2bbca102a34e57fce",
    "Content-Type": "application/json",
  };

  let prixDispo; // Variable pour stocker les prix disponibles

  fetch(url, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      prixDispo = data._embedded.prices.map((price) => price.id);
    })
    .then(() => {
      fetch(url2, {
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          const idGeneraux = data._embedded.prices;
          const prixGeneraux = idGeneraux.filter((prix) => prixDispo.includes(prix.id));
          console.log(prixGeneraux);

          const tarifsDispo = document.querySelector("#tarifsDispo");

          prixGeneraux.forEach((prix) => {
            const prixEnEuros = (prix.valueCents / 100).toFixed(2);

            const prixHtml = `
              <div class="prixDispo">
                ${prix.name} <br />
                ${prixEnEuros} €
                <button class="decrement">-</button>
                <span id="${prix.id}" class="compteur">0</span>
                <button class="increment">+</button>
                <br /><br />
              </div>`;
            tarifsDispo.innerHTML += prixHtml;
            const decrement = document.querySelectorAll(".decrement");
            decrement.forEach((button) => {
              const compteur = button.parentElement.querySelector(".compteur");
              button.addEventListener("click", () => {
                let count = parseInt(compteur.textContent);
                if (count > 0) {
                  count--;
                  compteur.textContent = count;
                }
              });
            });

            const increment = document.querySelectorAll(".increment");
            increment.forEach((button) => {
              const compteur = button.parentElement.querySelector(".compteur");
              button.addEventListener("click", () => {
                let count = parseInt(compteur.textContent);
                count++;
                compteur.textContent = count;
              });
            });
          });
        });
    });
  ("");
});
