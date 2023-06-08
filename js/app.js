// * Premier fetch

const fetch1 = document.querySelector("#fetch1");

fetch1.addEventListener("click", () => {
  const url =
    "https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/calendar/day/2023-06-08?lang=fr";

  const headers = {
    Authorization: "Bearer e42fad22d443323410718077945e079dcb5f6d7d",
  };
  fetch(url, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});

// * Deuxieme fetch

const fetch2 = document.querySelector("#fetch2");

fetch2.addEventListener("click", () => {
  const url =
    "https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/shows/9221859/prices?limit=10&offset=0&lang=fr";

  const headers = {
    Authorization: "Bearer e42fad22d443323410718077945e079dcb5f6d7d",
  };
  fetch(url, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
