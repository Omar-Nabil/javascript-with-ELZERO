// one

console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(10 ** 5); // 100000
console.log(100000.2524.toFixed()); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(parseInt("100000 Osama")); // 100000
console.log(parseFloat("100000.400 Osama").toFixed()); // 100000
console.log(Math.round(100000.2)); // 100000
console.log(Math.ceil(99999.2)); // 100000
console.log(Math.floor(100000.9)); // 100000

// two

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// three
console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16

// four

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57
// five
let num = 10;

console.log(Number.isInteger(num) + 1); // 2

// six
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(parseFloat(flt).toFixed()); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10

// seven

console.log(Math.trunc(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4