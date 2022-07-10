// function add(value1, value2) {
//   return value1 + " plus " + value2 + " = " + value1 + value2;
// }

// function subtract(value1, value2) {
//   return value1 + " minus " + value2 + " = " + value1 - value2;
// }

// function divide(value1, value2) {
//   return value1 + " divided by " + value2 + " = " + value1 / value2;
// }

// function multiply(value1, value2) {
//   return value1 + " multiplied " + value2 + " = " + value1 * value2;
// }

// alert(add(14, 15));
// alert(divide(100, 20));
// alert(subtract(25, 4));
// alert(multiply(19, 3));

// let now = new Date();

// let days = new Array(
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// );

// let months = new Array(
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December"
// );

// let date = (now.getDate() < 10 ? "0" : "") + now.getDate();

// function getFourDigits(number) {
//   return number < 1000 ? number + 1900 : number;
// }
// today =
//   days[now.getDay()] +
//   ", " +
//   months[now.getMonth()] +
//   " " +
//   date +
//   ", " +
//   getFourDigits(now.getYear());

// alert(today);

const buttonsGroup = document.querySelector("#buttons-group");
console.log("button group object", buttonsGroup);
console.log("button string", buttonsGroup.outerHTML);
const divContainer = document.createElement("div");

divContainer.innerHTML = buttonsGroup.outerHTML;
document.body.appendChild(divContainer);
