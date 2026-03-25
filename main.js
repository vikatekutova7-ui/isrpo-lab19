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

// const add = function (a, b) {
//     return a + b;
// };
// console.log(add(2, 3));

// function makeCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }
// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function sumFunc(a, b) {
//     return a + b;
// }
// const sumFunc2 = (a, b) => a+ b;
// const double = x => x * 2;
// const sayGreeting = () => console.log("Hello");
// const square = x => x * x;
// const calculate = (a, b) => {
//     let result = a + b;
//     return result * 2;
// }

// let numbersArr = [1, 2, 3, 4, 5];
// console.log(numbersArr);
// console.log(numbersArr[0]);
// console.log(numbersArr[1]);
// console.log(numbersArr.length);
// numbersArr.push(10);
// console.log(numbersArr);
// numbersArr.pop();
// console.log(numbersArr);

// let colors = ["red", "orange", "yellow"];
// console.log(colors[0]);
// console.log(colors[2]);
// colors[1] = "green";
// console.log(colors);

// let students = [];
// students.push("Vika");
// students.push("Artem");
// students.push("Vlad");
// students.pop();
// console.log(students);

// let numbers2 = [10, 20, 30];
// for (let i = 0; i < numbers2.length; i++) {
//     console.log(numbers2[i]);
// }
// for (let value of numbers2) {
//     console.log(value);
// }
// let mixedArray = [1, "text", true, 3.14];
// console.log(mixedArray);
// console.log(numbersArr.indexOf(1));
// console.log(numbersArr.indexOf(2));
// console.log(numbersArr.includes(1));
// console.log(numbersArr.includes(100));
// let cities = ["Moscow", "Kazan", "Volgograd"];
// if (cities.includes("Kazan")) {
//     console.log(cities.indexOf("Kazan"));
// }

// let user2 = {
//     name: "Ivan",
//     age: 20,
//     isStudent: true,
//     sayHello: function () {
//         console.log(`Hello, my name is ${name}`);
//     }
// };
// console.log(user2);
// console.log(user2.name);
// console.log(user2.age);
// console.log(user2["age"]);
// let book = {
//     title: "JavaScript",
//     author: "Vika Tekutova",
//     year: 2026
// };
// user2.age = 30;
// user2.name = "Kirill";
// delete user2.isStudent;
// console.log(user2);
// console.log(book.title);
// console.log(book.author);
// console.log(book.year);
// book.year = 2025;
// let car = {
//     brand: "Ivan",
//     year: 20,
//     getInfo: function () {
//         console.log(`Brand: ${brand}, year: ${yaer}`);
//     }
// };
// for (let key in user2) {
//     console.log(key + ": " + user2[key]);
// }
let product = {
    name: "iPhone 17",
    year: 2025,
    price: 100000
};
for (let key in product) {
    console.log(key + ": " + product[key]);
}
let student = {
    name: "Grisha",
    skills: ["HTML", "CSS", "JS"],
    address: {
        city: "Volzhsky",
        street: "Pushkina"
    }
};
console.log(student.skills[0]);
console.log(student.address.city);

