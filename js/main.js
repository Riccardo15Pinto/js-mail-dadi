/*--------------------------
-----GIOCO DADI -----------*/

//console check
console.log('ok js');
// check element
const buttonElement = document.getElementById('start-game');
const textElement = document.getElementById('your-result');
// random variable
let randomchoice = Math.floor(Math.random() * 6) + 1;
console.log(randomchoice);