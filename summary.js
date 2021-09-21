var phones = ['iphone', 'shomi', 'Led', 'lcd', 'lg', 'samsung'];

// if oppo exist in an array
if(phones.indexOf('oppo') == -1) {
    console.log('oppo is missing')
}

// lg is availabe
if(phones.indexOf('lg') != -1) {
    console.log('lg is available now');
}

// function 
function threeNumber(num1, num2, num3){
    var total = num1 + num2 + num3;
    return total;
}
var result = threeNumber(10, 20, 30);
console.log(result);
