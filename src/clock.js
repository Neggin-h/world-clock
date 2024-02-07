function updateTime() {
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = document.querySelector(".date");
    let torontoTimeElement = document.querySelector(".time");
    let torontoTime = moment().tz("America/Toronto");

    torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
    torontoTimeElement.innerHTML = torontoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let tehranElement = document.querySelector("#tehran");
  if (tehranElement) {
    let tehranDateElement = document.querySelector(".date");
    let tehranTimeElement = document.querySelector(".time");
    let tehranTime = moment().tz("Asia/Tehran");

    tehranDateElement.innerHTML = tehranTime.format("MMMM Do YYYY");
    tehranTimeElement.innerHTML = tehranTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
