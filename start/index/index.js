console.log(5 + 6);

const numbers = ['1', '2', '3'];
numbers.push('4');
console.log(numbers);

let x1 = 25;
let x2 = 15;
let x3 = x1 ** 0.5;
console.log(x3);

let func = function_(3, 3, 6);

function function_(a, b, c) {
  return a * b + c;
}

console.log(func);

function toCelcius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(toCelcius(77));

//objects
const person = {
  firstName: 'K',
  number: 24.001,
};
console.log(person.number);

const person1 = {
  firstName: 'Jon',
  lastName: 'John',
  id: 54,
  fullName: function () {
    return this.firstName + ' ' + lastName;
  },
};

console.log(person1.fullName);
