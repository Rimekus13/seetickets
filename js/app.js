//* Creation d'un utilisateur

const createUser = document.querySelector("#createUser");

createUser.addEventListener("click", () => {
  const data = {
    firstName: "Alex",
    lastName: "Alex",
    civility: "mr",
    login: "13vlxx",
    cellPhoneNumber: "55566588",
    fixedPhoneNumber: "55566588",
    email: "alex@gmail.com",
    password: "*********",
    address: "123 Main St",
    additionalAddress: "Building A1",
    zipcode: "13001",
    city: "Anytown",
    countryId: 1,
    birthDate: "1999-01-25",
    isInvitedAccount: false,
    facebookUserId: "12314",
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
    Authorization: "Bearer 645df60e63c743809f7cc5f33a54e9d222d8bc3f",
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

// * Premier fetch

const fetch1 = document.querySelector("#fetch1");

fetch1.addEventListener("click", () => {
  const url =
    "https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/calendar/day/2023-06-10?lang=fr";

  const headers = {
    Authorization: "Bearer 645df60e63c743809f7cc5f33a54e9d222d8bc3f",
  };
  fetch(url, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data._embedded.hours);
    });
});

// * Deuxieme fetch

const fetch2 = document.querySelector("#fetch2");

fetch2.addEventListener("click", () => {
  const url =
    "https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/shows/9210959/prices?limit=10&offset=0&lang=fr";

  const headers = {
    Authorization: "Bearer 645df60e63c743809f7cc5f33a54e9d222d8bc3f",
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
    Authorization: "Bearer 645df60e63c743809f7cc5f33a54e9d222d8bc3f",
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
    "https://front.apirecette.digitick-ppe.com/v1.1/order/carts/288019323/entries/createByPrices";

  const headers = {
    Authorization: "Bearer 645df60e63c743809f7cc5f33a54e9d222d8bc3f",
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
    "https://front.apirecette.digitick-ppe.com/v1.1/order/carts/288019323/salesChannels/13357/check?userId=77204063";

  const headers = {
    Authorization: "Bearer 645df60e63c743809f7cc5f33a54e9d222d8bc3f",
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
  const url = "https://front.apirecette.digitick-ppe.com/v1.1/order/carts/288019323";

  const headers = {
    Authorization: "Bearer 645df60e63c743809f7cc5f33a54e9d222d8bc3f",
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
    deviceId: 12654,
    salerId: 1200,
  };

  const url =
    "https://front.apirecette.digitick-ppe.com/v1.1/order/transactions/carts/288019323/createOrderFromCart";

  const headers = {
    Authorization: "Bearer 645df60e63c743809f7cc5f33a54e9d222d8bc3f",
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
