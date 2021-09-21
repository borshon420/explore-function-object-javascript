// 1. variable
var favoriteBook = '4 hour work week';

// 2. array
var bookList = ['positioning', 'Hooked', 'start with why', 'shoe dog'];
var shoeDogList = bookList.indexOf('shoe dog');
bookList[1] = 'story brand';
bookList.push('small giant');
bookList.pop();


// 3. conditionals
if(bookList[1] == 'Hooked') {
    console.log('I am hooked');
}
else {
    console.log('I am not hooked');
}

// 4. loop
// while loop
var i = 0;
while(i < 15) {
    console.log(i);
    console.log('looping looping looping');
    i++;
}

// for loop
for(var i = 0; i < 15; i++) {
    console.log('looping looping looping');
}