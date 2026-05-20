const cal = document.getElementById("myCal");
const display = document.getElementById("myDisplay");
const btn = document.getElementById("myButton");
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const add = document.getElementById("+");
const sub = document.getElementById("-");
const divide = document.getElementById("/");
const multiple = document.getElementById("*");
const clear = document.getElementById("clr");
const equal = document.getElementById("=");

let value = "";

zero.onclick = function() {
    value += '0';
    display.textContent = value;
};
one.onclick = function() {
    value += '1';
    display.textContent = value;
};
two.onclick = function() {
    value += '2';
    display.textContent = value;
};
three.onclick = function() {
    value += '3';
    display.textContent = value;
};
four.onclick = function() {
    value += '4';
    display.textContent = value;
};
five.onclick = function() {
    value += '5';
    display.textContent = value;
};
six.onclick = function() {
    value += '6';
    display.textContent = value;
};
seven.onclick = function() {
    value += '7';
    display.textContent = value;
};
eight.onclick = function() {
    value += '8';
    display.textContent = value;
};
nine.onclick = function() {
    value += '9';
    display.textContent = value;
};
divide.onclick = function() {
    value += '/';
    display.textContent = value;
};
multiple.onclick = function() {
    value += '*';
    display.textContent = value;
};
add.onclick = function() {
    value += '+';
    display.textContent = value;
};
sub.onclick = function() {
    value += '-';
    display.textContent = value;
};
clear.onclick = function() {
    value = "";
    display.textContent = value;
};
equal.onclick = function () {
    value = parseFloat(eval(value).toFixed(3));
    display.textContent = value;
}