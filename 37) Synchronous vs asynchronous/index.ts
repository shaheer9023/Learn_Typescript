// Synchronous Methods
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// it will print line by line in synchronous mode

// Asynchronous Methods
console.log(1);
setTimeout(() => {
    console.log(2);
}, 5000);
console.log(3);
console.log(4);
console.log(5);
// it will print 1, 3, 4, 5, 2 in asynchronous mode

// Basically setTimeout is a synchronous method

// Summary
// Synchronous Methods - it will print line by line in synchronous mode
// Asynchronous Methods - it will also print line by line but where delay occurs it will print upcoming lines then it will print delayed line