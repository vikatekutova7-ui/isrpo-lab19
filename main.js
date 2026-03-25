// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }
// for (let i = 1; i < 11; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
// let c = 0;
// for (let i = 1; i < 11; i++) {
//     c += i;
// }
// console.log(c);

// let count = 0;
// while (count < 3) {
//     console.log("Count:", count);
//     count++;
// }
// let number = 5;
// while (number >= 0) {
//     console.log("Number:", number);
//     number--;
// }

// let doValue = 0;
// do {
//     console.log("Value:", doValue);
//     doValue++;
// } while (doValue < 3);

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         break;
//     }
//     console.log(i);
// }
// for (let i = 1; i < 11; i++) {
//     if (i == 5) {
//         continue;
//     }
//     if (i == 8) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }
// for (let i = 1; i <= 4; i++) {
//   let s = "";
//   for (let j = 1; j <= i; j++) {
//     s += "*";
//   }
//   console.log(s);
// }

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(3, 5));
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(3, 5));
// function printInfo(name, age) {
//     console.log(`Name: ${name}, age: ${age}`);
// }
// printInfo("Polina", 17);
// function calculateDiscount(price, discount = 10) {
//     console.log(`Total cost: ${price - (price * (discount / 100))}`);
// }
// calculateDiscount(100);
// calculateDiscount(100, 20);

const add = function (a, b) {
    return a + b;
};
console.log(add(2, 3));

function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function sumFunc(a, b) {
    return a + b;
}
const sumFunc2 = (a, b) => a+ b;
const double = x => x * 2;
const sayGreeting = () => console.log("Hello");
const square = x => x * x;
const calculate = (a, b) => {
    let result = a + b;
    return result * 2;
}