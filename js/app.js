const fetch1 = document.querySelector("#fetch1");

fetch1.addEventListener("click", () => {
  const url =
    "https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/calendar/day/2023-06-08?lang=fr";

  const headers = {
    Authorization: "Bearer 1aa8b6e14ba3760a7ab23cce3aebdc75418843a2",
  };
  fetch(url, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
