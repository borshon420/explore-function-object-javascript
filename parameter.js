function bringSingara(taka) {
    console.log('Shingarar jonno dise ',taka);
    console.log('mama shingara den');
    var shingaraPrice = 10;
    var shingaraQuantity = taka / shingaraPrice;
    return shingaraQuantity;
}

var money = 100;
var singara = bringSingara(money);
console.log('Ai nen shingara', singara);