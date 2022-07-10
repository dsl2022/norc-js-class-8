const numbers = [3, 4, 34, 5, 6, 4, 3, 5, 67, 8, 54, 98, 22, 34, 52];
const evenNumbers = [];
const oddNumbers = [];
numbers.forEach((num) => console.log(num));
console.log("---------");
numbers.forEach((num) => {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  } else {
    oddNumbers.push(num);
  }
});
console.log(evenNumbers);
console.log("---------");
console.log(oddNumbers);
console.log("---------");
const doubleNumbers = numbers.map((num) => num * 2);
const doubleOddNumbers = numbers.map((num) => {
  if (num % 2 != 0) {
    return num * 2;
  } else {
    return num;
  }
});
console.log(doubleNumbers);
console.log("---------");
console.log(doubleOddNumbers);

const numGreaterThan50 = numbers.filter((num) => num > 50);
console.log(numGreaterThan50);

const sorted = numbers.sort((a, b) => a - b);
console.log(sorted);

// forEach
// map
// filter
// sort
