var computer = {
    price: 29000,
    memory: '160gb',
    display: 'white',
    processor: 'intel i5'
}

// console.log(computer.processor);
// var computerPrice = computer.price;
// console.log(computerPrice);
// computer.price = 22000;
computer["price"] = 23000;
var priceProperty = 'price';
computer[priceProperty] = 24000;
console.log(computer);