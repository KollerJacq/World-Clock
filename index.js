function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = `${newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let shanghaiElement = document.querySelector("#shanghai");
  let shanghaiDateElement = shanghaiElement.querySelector(".date");
  let shanghaiTimeElement = shanghaiElement.querySelector(".time");
  let shanghaiTime = moment().tz("Asia/Shanghai");

  shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
  shanghaiTimeElement.innerHTML = `${shanghaiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let istanbulElement = document.querySelector("#istanbul");
  let istanbulDateElement = istanbulElement.querySelector(".date");
  let istanbulTimeElement = istanbulElement.querySelector(".time");
  let istanbulTime = moment().tz("Europe/Istanbul");

  istanbulDateElement.innerHTML = istanbulTime.format("MMMM Do YYYY");
  istanbulTimeElement.innerHTML = `${istanbulTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}
updateTime();
setInterval(updateTime, 1);
