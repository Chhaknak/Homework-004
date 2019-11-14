function sum(a, b) {
    document.getElementById('result').innerHTML = `${a+b}`;
}

function minus(a, b) {
    document.getElementById('result').innerHTML = `${a-b}`;
}

function multiply(a, b) {
    document.getElementById('result').innerHTML = `${a*b}`;
}

function divide(a, b) {
    document.getElementById('result').innerHTML = `${a/b}`;
}


var btn = document.getElementById('sum');
btn.onclick = function () {
    var number1 = parseInt (document.getElementById('num1').value);
    var number2 = parseInt (document.getElementById('num2').value);
    sum(number1, number2);
}

var btn = document.getElementById('minus');
btn.onclick = function () {
    var number1 = parseInt (document.getElementById('num1').value);
    var number2 = parseInt (document.getElementById('num2').value);
    minus(number1, number2);
}

var btn = document.getElementById('multiply');
btn.onclick = function () {
    var number1 = parseInt (document.getElementById('num1').value);
    var number2 = parseInt (document.getElementById('num2').value);
    multiply(number1, number2);
}

var btn = document.getElementById('divide');
btn.onclick = function () {
    var number1 = parseInt (document.getElementById('num1').value);
    var number2 = parseInt (document.getElementById('num2').value);
    divide(number1, number2);
}