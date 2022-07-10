// // function add(value1, value2) {
// //   return value1 + " plus " + value2 + " = " + value1 + value2;
// // }

// // function subtract(value1, value2) {
// //   return value1 + " minus " + value2 + " = " + value1 - value2;
// // }

// // function divide(value1, value2) {
// //   return value1 + " divided by " + value2 + " = " + value1 / value2;
// // }

// // function multiply(value1, value2) {
// //   return value1 + " multiplied " + value2 + " = " + value1 * value2;
// // }

// // alert(add(14, 15));
// // alert(divide(100, 20));
// // alert(subtract(25, 4));
// // alert(multiply(19, 3));

// // let now = new Date();

// // let days = new Array(
// //   "Sunday",
// //   "Monday",
// //   "Tuesday",
// //   "Wednesday",
// //   "Thursday",
// //   "Friday",
// //   "Saturday"
// // );

// // let months = new Array(
// //   "January",
// //   "February",
// //   "March",
// //   "April",
// //   "May",
// //   "June",
// //   "July",
// //   "August",
// //   "September",
// //   "October",
// //   "November",
// //   "December"
// // );

// // let date = (now.getDate() < 10 ? "0" : "") + now.getDate();

// // function getFourDigits(number) {
// //   return number < 1000 ? number + 1900 : number;
// // }
// // today =
// //   days[now.getDay()] +
// //   ", " +
// //   months[now.getMonth()] +
// //   " " +
// //   date +
// //   ", " +
// //   getFourDigits(now.getYear());

// // alert(today);

// const buttonsGroup = document.querySelector("#buttons-group");
// console.log("button group object", buttonsGroup);
// console.log("button string", buttonsGroup.outerHTML);
// const divContainer = document.createElement("div");

// divContainer.innerHTML = buttonsGroup.outerHTML;
// document.body.appendChild(divContainer);
// document.body.append(`<div>ddddddddd</div>`);
// image = document.querySelector("#cat");
// button = document.querySelector("#cat-button");
// button.addEventListener("click", () => {
//   image.setAttribute(
//     "src",
//     `https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png`
//   );
// });

const fieldNames = [
  "First Name",
  "Last Name",
  "Company Name",
  "Email",
  "Phone",
  "Fax",
  "Address",
  "City",
  "State",
  "ZipCode",
  "Country",
  "Device Information",
  "Date of Purchase",
  "Model",
  "Warranty Serial",
];

const formElement = document.createElement("form");

const fieldsStringElements = fieldNames.map((field) => {
  return `<li>
   <label for="${field}">${field}</label>
    <input name="${field}" type="text"></li>`;
});
const submit = document.createElement("button");
const cancel = document.createElement("button");
submit.textContent = "submit";
cancel.textContent = "cancel";
formElement.innerHTML = `<ul>${fieldsStringElements}</ul>`;

formElement.appendChild(submit);
formElement.appendChild(cancel);
document.body.appendChild(formElement);
