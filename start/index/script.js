console.log('hello!');
console.log(10 + 100);

document.getElementById('demo2').innerHTML = 5 + 5 + 5;

function myFunction() {
  document.getElementById('demo3').innerHTML = 'paragraph changed';
}

function alert() {
  window.alert(5 + 1);
}

document.write(1 + 1 * 2);
alert(5 + 6);

function displayDate() {
  document.getElementById('demo').innerHTML = Date();
}

let text = 'Double quotes "Quote" javascript';
console.log(text.length);
console.log(text);

//objects

let x = new String('JS');
let y = new String('JS');

if (x == y) console.log('yes');
else console.log('no');

let str = 'Microsoft, Binary tree, reverse';
str = str.slice(1, 13);
console.log(str);

str = str.substr(7, 5);
console.log(str);

let text = 'microsoft microsofT';
let newText = text.replace(/Microsoft/g, 'apple');
console.log(newText);

let sstr = 'abcdefghijklmnopqrstuvwxyz';
sstr.lastIndexOf('x');
console.log(sstr);
