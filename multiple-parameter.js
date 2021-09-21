function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}

var firstNumber = 35;
var secondNumber = 41;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log('result value: ', result);

function multiplyTwoNumbers(num1, num2) {
    console.log(num1, num2);
    var total = num1 * num2;
    return total;
}

var numbers1 = 10;
var numbers2 = 20;
var results = multiplyTwoNumbers(10, 20)
console.log('Numbers multiply ', results);

// Biyog koro
function biyogFol(num1, num2) {
    var total = num1 - num2;
    return total;
}

var result = biyogFol(20, 10);
console.log('Hoia gelo jomfa ', result);

// vag koro
function vagFol(num1, num2) {
    var total = num1 / num2;
    return total;
}

var result = vagFol(20, 10);
console.log('Tai naki moshla papi ', result);