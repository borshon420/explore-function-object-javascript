var i = 0;
while (i < 10) {
    console.log(i);
    if(i==5) {
        break;
    }
    i++;
}
for(var i = 0; i < 10; i++) {
    console.log(i);
    if(i==8) {
        break;
    }
}

var numbers = [45, 54, 64, 68, 98, 105, 58, 36, 37];
for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if(number > 100) {
        break;
    }
}
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if(number > 90) {
        continue;
    }
    console.log(number);
}